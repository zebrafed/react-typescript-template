import { useTranslation } from 'react-i18next';
import './App.css'

const PAGE_NAME = 'App';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <p data-id={`${PAGE_NAME}-title`}>{t('title', { name: 'React Enthusiast' })}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
    </div>
  )
}

export default App
