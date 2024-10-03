import ArticlesGrid from "@/components/articles/ArticlesGrid";
import Loader from "@/components/layout/Loader";
import articleContent from "@/lib/fakedb";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

interface Article {
    name: string;
    title: string;
    content: string[];
    thumbnail: string;
}

interface ArticleProps {
    params: {
        name: string;
    };
}

const Article: React.FC<ArticleProps> = ({ params }) => {
    const article = articleContent.find((article: Article) => article.name === params.name);

    if (!article) {
        return (
            <div className="text-center my-6">
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
                    Article does not exist
                </h1>
                <Link href="/" className="px-4 py-2 bg-green-600 text-white font-bold rounded inline-block mt-5">
                    Go back to Articles List
                </Link>
            </div>
        );
    }


    const { title, content } = article;
    const otherArticles = articleContent.filter((elem: Article) => elem.name !== params.name);

    return (
        <article>
            <header>
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 my-6">
                    {title}
                </h1>
            </header>
            <section>
                {content.map((paragraph: string, index: number) => (
                    <p key={index} className="mx-auto leading-relaxed mb-6 text-base">
                        {paragraph}
                    </p>
                ))}
            </section>
            {/* ///////////////////////////////////// */}
            <h2 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
                Other Articles
            </h2>
            <div className="flex flex-wrap -m-4">
                <ArticlesGrid articles={otherArticles} />
            </div>
        </article>
    );
};

const DynamicArticle = dynamic(() => Promise.resolve(Article), {
    loading: () => <Loader />,
});

export default DynamicArticle;