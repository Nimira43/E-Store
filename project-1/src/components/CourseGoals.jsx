import {
  GrInstall,
  GrEdit,
  GrTerminal,
  GrResources,
  GrUserExpert,
  GrKey,
} from 'react-icons/gr'

import CourseGoal from './CourseGoal'
import classes from './CourseGoals.module.css'

const goals = [
  {
    icon: <GrInstall />,
    text: 'Install and Start Cypress',
  },
  {
    icon: <GrEdit />,
    text: 'Writing Tests with Cypress',
  },
  {
    icon: <GrTerminal />,
    text: 'Core Cypress Features and Commands',
  },
  {
    icon: <GrResources />,
    text: 'Customize and Configure Cypress',
  },
  {
    icon: <GrUserExpert />,
    text: 'Writing Good Tests & Following Best Practices',
  },
  {
    icon: <GrKey />,
    text: 'More Complex Problems',
  },
]

function CourseGoals() {
  return (
    <ul className={classes.goals}>
      {goals.map((goal) => (
        <CourseGoal key={goal.text} {...goal} />
      ))}
    </ul>
  )
}

export default CourseGoals
