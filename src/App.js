import React from "react";
import Overlay from "./Components/Pages/Overlay";
import SuccessModal from "./Components/Pages/SuccessModal";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import LoadingSpinner from "./Components/Pages/LoadingSpinner";
import { Route, Routes, Navigate } from "react-router-dom";

// Importing all our pages with the lazy loading function in order to route each page without loading the others.

const HeroPage = React.lazy(() => import("./Components/Pages/HeroPage"));
const SignUpPage = React.lazy(() => import("./Components/Pages/SignUpPage"));
const LogInPage = React.lazy(() => import("./Components/Pages/LogInPage"));
const PaymentPage = React.lazy(() => import("./Components/Pages/PaymentPage"));
const NewsPage = React.lazy(() => import("./Components/Pages/NewsPage"));
const PrivacyPage = React.lazy(() => import("./Components/Pages/PrivacyPage"));
const Page404 = React.lazy(() => import("./Components/Pages/Page404"));

const NifyFormPage = React.lazy(() =>
  import("./Components/Pages/NifyFormPage")
);

const HelpCenterPage = React.lazy(() =>
  import("./Components/Pages/HelpCenterPage")
);

const LearnMorePage = React.lazy(() =>
  import("./Components/Pages/LearnMorePage")
);

const PasswordPage = React.lazy(() =>
  import("./Components/Pages/PasswordPage")
);

const ResultSearchPage = React.lazy(() =>
  import("./Components/Pages/ResultSearchPage")
);

const TermsConditionsPage = React.lazy(() =>
  import("./Components/Pages/TermsConditionsPage")
);

function App() {
  const showServerModal = useSelector((state) => state.controler.showModal);

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        {showServerModal && <Overlay />}
        {showServerModal && <SuccessModal />}
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HeroPage />} />
          <Route path="/nify-form" element={<NifyFormPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/password-recovory" element={<PasswordPage />} />
          <Route path="/result-search" element={<ResultSearchPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/spinner" element={<LoadingSpinner />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
