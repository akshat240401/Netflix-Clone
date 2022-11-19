import './Content.css';
import RowData from '../../constants/URLS';
import Row from '../row/Row';

export default function Content() {
  return (
    <div className='content-wrapper'>

      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}

      
    </div>
  );
}

// 7bf77ad60513103f622a31bb90fa2671