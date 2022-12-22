import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import routes from "./routes";

const RouterConfig: React.FunctionComponent<RouterConfigProps> = ({
  emitter,
}: any) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    emitter.on("languageChanged", (lng: any) => {
      i18n.changeLanguage(lng);
    });
  }, []);
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={`${path}`} element={<Component />} />
        ))}
      </Routes>
    </React.Suspense>
  );
};

interface RouterConfigProps {
  children?: any;
}

export default RouterConfig;
