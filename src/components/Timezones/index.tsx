import React from "react";
import { List } from "../List";
import {
  localeToTimezoneLabelId,
  Timezone,
  timezones,
} from "../../utils/timezone.ts";
import { useLocale, useTimezone } from "../../utils/hooks.ts";
import { TimezoneLabel } from "./TimezoneLabel.tsx";
import { AiOutlineEnvironment } from "react-icons/ai";
import { TextWithIcon } from "../TextWithIcon";

type Props = {
  callback: (timezone: Timezone) => void;
};

const Timezones: React.FC<Props> = ({ callback }) => {
  const { timezone, mutateTimezone } = useTimezone();
  const { locale } = useLocale();
  const createLabel = (t: (typeof timezones)[number]): React.ReactNode => (
    <TimezoneLabel
      utc={t.utc}
      name={t[localeToTimezoneLabelId(locale)]}
      offset={t.offset}
    />
  );
  const createKey = (t: (typeof timezones)[number]): Timezone => t.id;
  return (
    <>
      <h2>
        <TextWithIcon icon={AiOutlineEnvironment}>Timezone</TextWithIcon>
      </h2>
      <List
        items={timezones}
        createLabel={createLabel}
        createKey={createKey}
        initialActiveKey={timezone}
        maxHeight="20em"
        callback={async (key) => {
          await mutateTimezone(key);
          callback(key);
        }}
      />
    </>
  );
};

export default Timezones;
