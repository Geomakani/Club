import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { createContext, useState } from "react";
import { events } from "@/components/data/events";

export const MyAppContext = createContext();

function App({ Component, pageProps }) {
  const [clickedSport, setClickedSport] = useState(-1);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <MyAppContext.Provider
      value={{
        clickedSport,
        setClickedSport,
        events,
      }}
    >
      <Component {...pageProps} />
    </MyAppContext.Provider>
  );
}
export default appWithTranslation(App);
