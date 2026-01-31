import { Layout } from "../components/layout/Layout";
import { Hero } from "../components/home/Hero";
import { FeaturedQuote } from "../components/home/FeaturedQuote";
import { Categories } from "../components/home/Categories";
import { LatestBlogs } from "../components/home/LatestBlogs";
import { ResourcesPreview } from "../components/home/ResourcesPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedQuote />
      <Categories />
      <ResourcesPreview />
      <LatestBlogs />
    </Layout>
  );
};

export default Index;
