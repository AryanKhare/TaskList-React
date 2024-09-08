import { FC } from 'react';
import { AppProps } from './types/AppProps.model';
import './App.css';

const App: FC<AppProps> = ({title}: {title: string}) => {
  return <>{title}</>
}

export default App;
