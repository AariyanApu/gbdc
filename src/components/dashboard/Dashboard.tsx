import { useState } from 'react'
import AddBlog from './AddSingleBlog'
import DeletePost from './DeletePost'
import AddDonor from './AddDonor'
import AddNotice from './AddNotice'
import AddAchievement from './AddAchievement'
import DeleteNotice from './DeleteNotice'
import DeleteDonor from './DeleteDonor'
import DeleteAchievements from './DeleteAchievements'
import AddActivity from './AddActivity'
import DeleteActivity from './DeleteActivity'
import { dashboardMenu } from '@/utils/data'

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('post')

  const handleButtonClick = (componentName: string) => {
    setActiveComponent(componentName)
  }
  const renderComponent = () => {
    switch (activeComponent) {
      case 'notice':
        return (
          <div>
            <AddNotice />
            <DeleteNotice />
          </div>
        )
      case 'donor':
        return (
          <div>
            <AddDonor />
            <DeleteDonor />
          </div>
        )
      case 'achievement':
        return (
          <div>
            <AddAchievement />
            <DeleteAchievements />
          </div>
        )
      case 'activity':
        return (
          <div>
            <AddActivity />
            <DeleteActivity />
          </div>
        )
      default:
        return (
          <div>
            <AddBlog /> <DeletePost />
          </div>
        )
    }
  }
  return (
    <div className="my-10 flex flex-row gap-x-2">
      <ul className="menu w-56 rounded-box bg-base-200">
        {dashboardMenu.map((menu) => (
          <li key={menu.value}>
            <a onClick={() => handleButtonClick(menu.value)}>{menu.name}</a>
          </li>
        ))}
      </ul>
      {renderComponent()}
    </div>
  )
}
