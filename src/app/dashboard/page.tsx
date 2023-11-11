import AddAchievement from '@/components/AddAchievement'
import AddActivity from '@/components/AddActivity'

export default function Dasboard() {
  return (
    <div className="mt-4 flex flex-row">
      <AddAchievement />
      <AddActivity />
    </div>
  )
}
