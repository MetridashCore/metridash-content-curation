import React from "react";
import { IoCreate as Create } from "react-icons/io5";
import { AiOutlineLoading as Loading } from "react-icons/ai";

interface Props {
  loading: boolean;
  suggestions: string[];
  onClickGenerateOutline: (prompt: string) => void;
}

const SuggestionList = (props: Props) => {
  let { loading, suggestions, onClickGenerateOutline } = props;

  return (
    <div className="rounded-lg border-b border-gray-200 bg-white shadow-xl p-4">
      <h1 className="text-2xl font-bold">Content Suggestions</h1>
      <div className="flex flex-col sm:grid-cols-2 gap-4 pt-4">
        {loading && (
          <>
            <div
              key={`suggestion-skeleton-0`}
              className="w-full sm:w-3/4 animate-pulse bg-gray-300 h-10 rounded-lg"
            />
            <div
              key={`suggestion-skeleton-1`}
              className="w-full sm:w-3/4 animate-pulse bg-gray-300 h-10 rounded-lg"
            />
            <div
              key={`suggestion-skeleton-2`}
              className="w-full sm:w-3/4 animate-pulse bg-gray-300 h-10 rounded-lg"
            />
            <div
              key={`suggestion-skeleton-3`}
              className="w-full sm:w-3/4 animate-pulse bg-gray-300 h-10 rounded-lg"
            />
            <div
              key={`suggestion-skeleton-4`}
              className="w-full sm:w-3/4 animate-pulse bg-gray-300 h-10 rounded-lg"
            />
          </>
        )}
        {!loading &&
          suggestions.length > 0 &&
          suggestions.map((val, index) => (
            <div key={`suggestion-${index}`} className="flex gap-10">
              <div className="w-full sm:w-3/4 border-2 border-gray-300 h-10 rounded-lg flex items-center pl-2 ">
                <p>{val}</p>
              </div>
              <button
                className="w-1/4 px-4 bg-blue-900 rounded-lg text-white hover:bg-blue-400"
                onClick={() => onClickGenerateOutline(val)}
              >
                <div className="flex gap-2 justify-center">
                  <Create color="white" size={20} />
                  Generate Outline
                </div>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SuggestionList;
