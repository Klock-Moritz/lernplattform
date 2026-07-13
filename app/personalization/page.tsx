"use client"
import { useTranslations } from 'next-intl';
import { useUserData } from "@/lib/user_data";
import { LabelledInputGroup } from '@/stories/LabelledInputGroup';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function Page() {
  const t = useTranslations();
  const [userData, setUserData] = useUserData();

  return (
    <div className='flex flex-col gap-8'>
      <LabelledInputGroup defaultValue={userData} value={userData}
        translationFunction={(key) => t(`common.${key}`)}
        onUpdate={setUserData} />

      <div className='flex justify-end'>
        <Button asChild radius="full" color="teal">
          <Link href="/self-eval">{t("common.next")}</Link>
        </Button>
      </div>
    </div>
  )
}