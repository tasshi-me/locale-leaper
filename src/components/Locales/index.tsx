import { Locale, locales } from "../../utils/locale.ts";
import React from "react";
import { List } from "../List";
import { useLocale } from "../../utils/hooks.ts";

type Props = {
  callback: (locale: Locale) => void;
};

const Locales: React.FC<Props> = ({ callback }) => {
  const { locale, mutateLocale } = useLocale();

  const createLabel = (t: (typeof locales)[number]): string => t.label;
  const createKey = (t: (typeof locales)[number]): Locale => t.key;

  return (
    <>
      <h2>Language</h2>
      <List
        items={locales}
        createKey={createKey}
        createLabel={createLabel}
        initialActiveKey={locale}
        itemsPerRow={2}
        callback={async (key) => {
          await mutateLocale(key);
          callback(key);
        }}
      />
    </>
  );
};

export default Locales;
