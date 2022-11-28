import { useEffect, useState } from "react";
import { NewsService } from "../services/NewsServices";

export function useGetArticles() {
  const [isLoading, setLoading] = useState("true");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    NewsService.getArticles()
    .then(({data}) => {
      setArticles(data.articles);
      setLoading("false");
    })
    .catch((error) => {
      console.log(error);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading === "true") {
    return isLoading;
  }

  return articles;
}