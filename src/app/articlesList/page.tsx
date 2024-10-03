import ArticlesGrid from "@/components/articles/ArticlesGrid";
import Loader from "@/components/layout/Loader";
import articleContent from "@/lib/fakedb";
import dynamic from "next/dynamic";
import React from "react";

const ArticlesList: React.FC = () => {
    return (
        <div>
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
                Articles List
            </h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <ArticlesGrid articles={articleContent} />
                </div>
            </div>
        </div>
    );
};

const DynamicArticlesList = dynamic(() => Promise.resolve(ArticlesList), {
    loading: () => <Loader />,
});

export default DynamicArticlesList;
