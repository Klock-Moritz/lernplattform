"use client"

import { useMails } from "@/lib/mails";
import { LikertScaleGroup } from "@/stories/LikertScaleGroup";
import { Button } from "@radix-ui/themes";
import { useTranslations } from "next-intl"
import Link from 'next/link';

export default function Page() {
  const t = useTranslations();
  const [mails, setMails] = useMails();

  return (
    <div className='flex flex-col gap-8'>
      <LikertScaleGroup defaultValue={mails} value={mails}
        minValue={0} maxValue={10}
        translationFunction={(key) => t(`mails.${key}`)}
        onUpdate={setMails} />

      <div className='flex justify-end'>
        <Button asChild radius="full" color="teal">
          <Link href="/prompt-tutor">{t("common.next")}</Link>
        </Button>
      </div>
    </div>
  )
}