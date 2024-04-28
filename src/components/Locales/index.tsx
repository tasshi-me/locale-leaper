import { Locale, locales } from "../../utils/locale.ts";
import React from "react";
import { List } from "../List";
import { useLocale } from "../../utils/hooks.ts";
import { AiOutlineMessage } from "react-icons/ai";
import { LocaleLabel } from "./LocaleLabel.tsx";
import { TextWithIcon } from "../TextWithIcon";

type Props = {
  callback: (locale: Locale) => void;
};

const Locales: React.FC<Props> = ({ callback }) => {
  const { locale, mutateLocale } = useLocale();

  const createLabel = (l: (typeof locales)[number]) => (
    <LocaleLabel name={l.label} />
  );
  const createKey = (l: (typeof locales)[number]): Locale => l.key;

  return (
    <>
      <h2>
        <TextWithIcon icon={AiOutlineMessage}>Language</TextWithIcon>
      </h2>
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
