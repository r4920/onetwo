import { Row } from "components/Row";
import { Text } from "components/Text";

export const Navigation1 = (props) => {
  return (
    <Row
      className={`  ${props?.className} `}
      id="14"
      width={1024}
      left={0}
      right={0}
      compType="Row"
    >
      <Text
        className="2xl:ml-[581px] 2xl:text-fs25 3xl:ml-[697px] 3xl:text-fs30 font-normal font-poppins lg:ml-[451px] lg:text-fs19 ml-[413px] text-colors text-fs18 text-left xl:ml-[516px] xl:text-fs22"
        id="1930:26511"
        width={112}
        left={413}
        right={0}
        compType="Text"
      >
        {props?.children}
      </Text>
      <Text
        className="2xl:ml-[71px] 2xl:text-fs25 3xl:ml-[86px] 3xl:text-fs30 font-normal font-poppins lg:ml-[55px] lg:text-fs19 ml-[51px] text-colors text-fs18 text-left xl:ml-[63px] xl:text-fs22"
        id="1930:26512"
        width={78}
        left={51}
        right={0}
        compType="Text"
      >
        {props?.children1}
      </Text>
      <Text
        className="2xl:ml-[163px] 2xl:mr-[265px] 2xl:text-fs25 3xl:ml-[195px] 3xl:mr-[319px] 3xl:text-fs30 font-normal font-poppins lg:ml-[126px] lg:mr-[206px] lg:text-fs19 ml-[116px] mr-[189px] text-colors text-fs18 text-left xl:ml-[145px] xl:mr-[236px] xl:text-fs22"
        id="1930:26513"
        width={65}
        left={116}
        right={189}
        compType="Text"
      >
        {props?.children2}
      </Text>
    </Row>
  );
};

Navigation1.defaultProps = {
  children: "",
  children1: "",
  children2: "",
};
