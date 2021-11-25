import Home from '../views/Home';
import City from '../views/City';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default function route(): JSX.Element {
  const allowCitys = '(臺北市|新北市|桃園市|臺中市|臺南市|高雄市|基隆市|新竹市|新竹縣|苗栗縣|彰化縣|南投縣|雲林縣|嘉義縣|嘉義市|屏東縣|宜蘭縣|花蓮縣|臺東縣|金門縣|澎湖縣|連江縣)';
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={`/city/:cityName${allowCitys}`} component={City} />
      </Switch>
    </HashRouter>
  );
}
