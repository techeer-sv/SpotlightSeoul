import NavBar from '../components/NavBar';
import FestivalInformation from '../components/FestivalInformation';
import MapInformation from '../components/MapInformation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type FestivalData = {
  main_img: string;
  major_code_name: string;
  sub_code_name: string;
  lat: number;
  lot: number;
  place: string;
  title: string;
  date: string;
  use_trgt: string;
  is_free: string;
  org_link: string;
  festival_view: number;
  festival_like: number;
};

function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const [mainImg, setMainImg] = useState<string>('');
  const [majorCodeName, setMajorCodeName] = useState<string>('');
  const [subCodeName, setSubCodeName] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [place, setPlace] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [targetUser, setTargetUser] = useState<string>('');
  const [isFree, setIsFree] = useState<string>('');
  const [orgLink, setOrgLink] = useState<string>('');
  const [festivalView, setFestivalView] = useState<number>(0);
  const [festivalLike, setFestivalLike] = useState<number>(0);

  // 공연 대표이미지 및 세부정보 API
  const FestivalDetailInformation = async () => {
    try {
      const response = await axios.get<FestivalData>(
        `http://localhost:8080/api/v1/festivals/${id}`,
      );
      const FestivalData: FestivalData = response.data;
      setMainImg(FestivalData.main_img);
      setMajorCodeName(FestivalData.major_code_name);
      setSubCodeName(FestivalData.sub_code_name);
      setLatitude(FestivalData.lat);
      setLongitude(FestivalData.lot);
      setPlace(FestivalData.place);
      setTitle(FestivalData.title);
      setDate(FestivalData.date);
      setTargetUser(FestivalData.use_trgt);
      setIsFree(FestivalData.is_free);
      setOrgLink(FestivalData.org_link);
      setFestivalView(FestivalData.festival_view);
      setFestivalLike(FestivalData.festival_like);
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
          majorCodeName={majorCodeName}
          subCodeName={subCodeName}
          place={place}
          title={title}
          date={date}
          targetUser={targetUser}
          isFree={isFree}
          orgLink={orgLink}
          festivalView={festivalView}
          festivalLike={festivalLike}
          festivalId={id}
        />
        {/* 위치정보 (지도) */}
        <MapInformation latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}

export default DetailPage;
