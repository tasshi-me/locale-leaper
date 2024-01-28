import React from "react";
import { List } from "../List";
import {
  localeToTimezoneLabelId,
  Timezone,
  timezones,
} from "../../utils/timezone.ts";
import { useLocale, useTimezone } from "../../utils/hooks.ts";

type Props = {
  callback: (timezone: Timezone) => void;
};

const Timezones: React.FC<Props> = ({ callback }) => {
  const { timezone, mutateTimezone } = useTimezone();
  const { locale } = useLocale();
  const createLabel = (t: (typeof timezones)[number]): React.ReactNode => (
    <>
      <span>{t.utc}</span>
      <span>{t[localeToTimezoneLabelId(locale)]}</span>
    </>
  );
  const createKey = (t: (typeof timezones)[number]): Timezone => t.id;
  return (
    <>
      <h2>Timezone</h2>
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

// const TimezoneComparator = (currentTimezone: Timezone) => (t1: Timezone, t2: Timezone): number => {
//   if (t1 === currentTimezone) return -1
//   if (t2 === currentTimezone) return 1
//   return 0
// }

export default Timezones;
