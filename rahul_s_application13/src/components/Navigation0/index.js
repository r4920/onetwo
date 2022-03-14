import { Row } from "components/Row";
import { Text } from "components/Text";

export const Navigation0 = (props) => {
  return (
    <Row
      className={`  ${props?.className} `}
      id="31"
      width={1024}
      left={0}
      right={0}
      compType="Row"
    >
      <Text
        className="2xl:ml-[121px] 2xl:text-fs56 3xl:ml-[145px] 3xl:text-fs67 font-bold font-poppins lg:ml-[94px] lg:text-fs43 ml-[86px] text-colors text-fs40 text-left xl:ml-[107px] xl:text-fs50"
        id="1930:26539"
        width={229}
        left={86}
        right={0}
        compType="Text"
      >
        {props?.children}
      </Text>
      <Text
        className="2xl:mb-[11px] 2xl:ml-[137px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[165px] 3xl:mt-[32px] 3xl:text-fs30 font-normal font-poppins lg:ml-[107px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[98px] mt-[19px] text-colors text-fs18 text-left xl:mb-[10px] xl:ml-[122px] xl:mt-[23px] xl:text-fs22"
        id="1930:26540"
        width={123}
        left={98}
        right={0}
        compType="Text"
      >
        {props?.children1}
      </Text>
      <Text
        className="2xl:mb-[11px] 2xl:ml-[56px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[67px] 3xl:mt-[32px] 3xl:text-fs30 font-normal font-poppins lg:ml-[43px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[40px] mt-[19px] text-colors text-fs18 text-left xl:mb-[10px] xl:ml-[50px] xl:mt-[23px] xl:text-fs22"
        id="1930:26541"
        width={97}
        left={40}
        right={0}
        compType="Text"
      >
        {props?.children2}
      </Text>
      <Text
        className="2xl:mb-[11px] 2xl:ml-[136px] 2xl:mr-[264px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[163px] 3xl:mr-[317px] 3xl:mt-[32px] 3xl:text-fs30 font-normal font-poppins lg:ml-[106px] lg:mr-[205px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[97px] mr-[188px] mt-[19px] text-colors text-fs18 text-left xl:mb-[10px] xl:ml-[121px] xl:mr-[235px] xl:mt-[23px] xl:text-fs22"
        id="1930:26542"
        width={66}
        left={97}
        right={188}
        compType="Text"
      >
        {props?.children3}
      </Text>
    </Row>
  );
};

Navigation0.defaultProps = {
  children: "",
  children1: "",
  children2: "",
  children3: "",
};
