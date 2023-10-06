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
  end_date: string;
  strt_date: string;
  target_user: string;
  price: string;
  org_link: string;
};

function DetailPage({ id }: { id: number }) {
  const [mainImg, setMainImg] = useState<string>('');
  const [codeName, setCodeName] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [place, setPlace] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [targetUser, setTargetUser] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [orgLink, setOrgLink] = useState<string>('');

  // 공연 대표이미지 및 세부정보 API
  const FestivalDetailInformation = async () => {
    try {
      const response = await axios.get<FestivalData>(
        `http://localhost:8080/api/v1/festivals/${id}`,
        {
          params: { id: id },
        },
      );
      const FestivalData: FestivalData = response.data;
      setMainImg(FestivalData.main_img);
      setCodeName(FestivalData.code_name);
      setLatitude(FestivalData.lat);
      setLongitude(FestivalData.lot);
      setPlace(FestivalData.place);
      setTitle(FestivalData.title);
      setEndDate(FestivalData.end_date);
      setStartDate(FestivalData.strt_date);
      setTargetUser(FestivalData.target_user);
      setPrice(FestivalData.price);
      setOrgLink(FestivalData.org_link);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FestivalDetailInformation();
  }, [id]);

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
          endDate={endDate}
          startDate={startDate}
          targetUser={targetUser}
          price={price}
          orgLink={orgLink}
        />
        {/* 위치정보 (지도) */}
        <MapInformation latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}

export default DetailPage;
