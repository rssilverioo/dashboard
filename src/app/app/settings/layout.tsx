import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'

import { PropsWithChildren } from 'react'
import { SettingSidebar } from './_components/settings-sidebar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="container max-w-screen-lg">
          <div className="grid grid-cols-[15rem_1fr] gap-4">
            <SettingSidebar />
            <div>{children}</div>
          </div>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  )
}
