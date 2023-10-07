import NavBar from '../components/NavBar';
import FestivalInformation from '../components/FestivalInformation';
import MapInformation from '../components/MapInformation';
import { useEffect, useState } from 'react';
import axios from 'axios';

type FestivalData = {
  main_img: string;
  code_name: string;
  lat: number;
  lot: number;
  place: string;
  title: string;
  date: string;
  use_trgt: string;
  price: string;
  org_link: string;
};

function DetailPage() {
  const [mainImg, setMainImg] = useState<string>('');
  const [codeName, setCodeName] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [place, setPlace] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [targetUser, setTargetUser] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [orgLink, setOrgLink] = useState<string>('');

  // 공연 대표이미지 및 세부정보 API
  const FestivalDetailInformation = async () => {
    try {
      const response = await axios.get<FestivalData>(
        'http://localhost:8080/api/v1/festivals/festivals/2',
      );
      const FestivalData: FestivalData = response.data;
      setMainImg(FestivalData.main_img);
      setCodeName(FestivalData.code_name);
      setLatitude(FestivalData.lat);
      setLongitude(FestivalData.lot);
      setPlace(FestivalData.place);
      setTitle(FestivalData.title);
      setDate(FestivalData.date);
      setTargetUser(FestivalData.use_trgt);
      setPrice(FestivalData.price);
      setOrgLink(FestivalData.org_link);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FestivalDetailInformation();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* 네비게이션 바 */}
      <NavBar />
      {/* Content */}
      <div className="flex h-auto w-11/12 flex-col items-center justify-center">
        {/* 대표이미지 및 공연 세부정보 */}
        <FestivalInformation
          mainImg={mainImg}
          codeName={codeName}
          place={place}
          title={title}
          date={date}
          targetUser={targetUser}
          price={price}
          orgLink={orgLink}
        />
        {/* 위치정보 (지도) */}
        <MapInformation latitude={longitude} longitude={latitude} />
      </div>
    </div>
  );
}

export default DetailPage;
