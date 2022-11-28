import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { ArticlesGrid } from "../components/ArticlesGrid";
import { Loading } from "../components/Loading";
import { PageTitle } from "../components/PageTitle";
import { useGetByCategory } from "../hooks/useGetByCategory";

export function Category() {
  const { category } = useParams();
  let articles = useGetByCategory(category);

  if (articles === "true") {
    return (
      <Loading />
    )
  }

  return (
    <Box sx={{ p: 4 }}>
      <PageTitle title={ category }/>
      <ArticlesGrid articles={ articles.articles } />
    </Box>
  );
}