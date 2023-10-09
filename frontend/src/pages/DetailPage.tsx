import NavBar from '../components/NavBar';
import FestivalInformation from '../components/FestivalInformation';
import MapInformation from '../components/MapInformation';
import { useEffect, useState } from 'react';
import axios from 'axios';

type FestivalData = {
  main_img: string;
  codename: string;
  lat: number;
  lot: number;
  place: string;
  title: string;
  date: string;
  use_trgt: string;
  is_free: string;
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
  const [isFree, setIsFree] = useState<string>('');
  const [orgLink, setOrgLink] = useState<string>('');

  // 공연 대표이미지 및 세부정보 API
  const FestivalDetailInformation = async () => {
    try {
      const response = await axios.get<FestivalData>(
        'http://localhost:8080/api/v1/festivals/3',
      );
      const FestivalData: FestivalData = response.data;
      setMainImg(FestivalData.main_img);
      setCodeName(FestivalData.codename);
      setLatitude(FestivalData.lat);
      setLongitude(FestivalData.lot);
      setPlace(FestivalData.place);
      setTitle(FestivalData.title);
      setDate(FestivalData.date);
      setTargetUser(FestivalData.use_trgt);
      setIsFree(FestivalData.is_free);
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
          isFree={isFree}
          orgLink={orgLink}
        />
        {/* 위치정보 (지도) */}
        <MapInformation latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}

export default DetailPage;
