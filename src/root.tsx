import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Navbar from "./components/Navbar";
import "./styles/root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Embassy Airlines</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="Canada's Friendly Airline" />
        <Meta
          name="keywords"
          content="Canadian Airline, Vancouver Airline, Vancouver flights"
        />
        <Meta name="author" content="Embassy Airlines" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Navbar />
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
