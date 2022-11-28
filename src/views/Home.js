import { Box } from "@mui/material";
import { ArticlesGrid } from "../components/ArticlesGrid";
import { Loading } from "../components/Loading";
import { PageTitle } from "../components/PageTitle";
import { useGetArticles } from "../hooks/useGetArticles";


export function Home() {
  const articles = useGetArticles();

  if (articles === "true") {
    return (
      <Loading />
    )
  }

  return (
    <Box sx={{ p: 4 }}>
      <PageTitle />
      <ArticlesGrid articles={ articles } />
    </Box>
  );
}