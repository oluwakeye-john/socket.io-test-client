import { HomeContainer, HomeFlex } from "./style";
import EmitBox from "../../components/emit";
import ResultBox from "../../components/result";

const Home = () => {
  return (
    <HomeContainer>
      <HomeFlex>
        <EmitBox />
        <ResultBox />
      </HomeFlex>
    </HomeContainer>
  );
};

export default Home;
