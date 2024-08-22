import { Metadata } from "next";
import Dashboard from "../backend/dashboard/page";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Home = () => {
  return <Dashboard />;
};

export default Home;
