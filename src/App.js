import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import './Calendar.css';
import { MovieList } from './componets/MovieList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TV from './images/TV.png';

function App() {
  const navigate = useNavigate();

  const formatDate = (value) => {
    navigate(`/movie/${value.toLocaleDateString().split('/').reverse().join('-')}`)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="home_page">
            <h1 className="home_page__header">
              Super film
            </h1>
            <img
              className="home_page__img"
              src={TV}
              alt="TV"
            />
            <Calendar
              className="home_page__calendar"
              onClickDay={formatDate}
              prevLabel="&#60;"
              nextLabel="&#62;"
            />
          </div >
        }>
        </Route>
        <Route path="/movie/:date" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
