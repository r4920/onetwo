import React from "react";

import { Column } from "components/Column";
import { Text } from "components/Text";
import { List } from "components/List";
import { Row } from "components/Row";
import { CheckBox } from "components/CheckBox";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";

const TypographyListPage = () => {
  return (
    <Column
      className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]"
      id="1507:584"
      width={1134}
      left={0}
      right={0}
      compType="Column"
    >
      <Column
        className="2xl:mb-[166px] 2xl:mt-[140px] 3xl:mb-[199px] 3xl:mt-[168px] font-poppins justify-start lg:mb-[129px] lg:mt-[109px] mb-[118px] mt-[100px] mx-[auto] self-stretch w-[100%] xl:mb-[147px] xl:mt-[125px]"
        id="110"
        width={1134}
        left={0}
        right={0}
        compType="Column"
      >
        <Text
          className="2xl:mx-[168px] 2xl:text-fs75 3xl:mx-[202px] 3xl:text-fs91 font-bold lg:mx-[131px] lg:text-fs59 max-w-[94px] mx-[120px] text-fs54 text-gray_900 text-left xl:mx-[150px] xl:text-fs67"
          id="1507:585"
          width={94}
          left={120}
          right={120}
          compType="Text"
        >{`List`}</Text>
        <Column
          className="2xl:mt-[87px] 3xl:mt-[104px] items-end lg:mt-[67px] mt-[62px] self-stretch w-[100%] xl:mt-[77px]"
          id="128"
          width={1134}
          left={0}
          right={0}
          compType="Column"
        >
          <List
            className="2xl:mx-[84px] 3xl:mx-[101px] flex-wrap gap-[0] lg:mx-[65px] min-h-[auto] mx-[60px] w-[85%] xl:mx-[75px]"
            id="127"
            width={954}
            left={60}
            right={60}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="2xl:mr-[167px] 2xl:my-[5px] 3xl:mr-[200px] 3xl:my-[6px] font-poppins items-center justify-start lg:mr-[130px] mr-[119px] my-[4px] w-[88%] xl:mr-[148px] xl:my-[5px]"
              id="1509:805"
              width={835}
              left={0}
              right={119}
              compType="Row"
            >
              <CheckBox
                className="2xl:text-fs22 3xl:text-fs27 font-light lg:text-fs17 text-fs16 text-gray_900 text-left w-[35%] xl:text-fs20"
                inputClassName="bg-deep_purple_A200 rounded-radius2 mr-[5px]"
                id="2"
                width={285}
                left={0}
                right={0}
                compType="CheckBox"
                name="Group2"
                label={`Marked List;`}
              ></CheckBox>
              <Text
                className="2xl:ml-[292px] 2xl:text-fs22 3xl:ml-[351px] 3xl:text-fs27 font-bold lg:ml-[227px] lg:text-fs17 ml-[208px] text-deep_purple_A200 text-fs16 text-left xl:ml-[260px] xl:text-fs20"
                id="I1509:805;1509:785"
                width={11}
                left={208}
                right={0}
                compType="Text"
              >{`1.`}</Text>
              <Text
                className="2xl:ml-[16px] 2xl:text-fs22 3xl:ml-[20px] 3xl:text-fs27 font-light lg:ml-[13px] lg:text-fs17 ml-[12px] text-fs16 text-gray_900 text-left xl:ml-[15px] xl:text-fs20"
                id="I1509:805;1509:786"
                width={319}
                left={12}
                right={0}
                compType="Text"
              >{`Numbered list;`}</Text>
            </Row>
            <Row
              className="2xl:my-[5px] 3xl:my-[6px] font-poppins items-center justify-start mx-[auto] my-[4px] self-stretch w-[100%] xl:my-[5px]"
              id="1509:852"
              width={954}
              left={0}
              right={0}
              compType="Row"
            >
              <CheckBox
                className="2xl:text-fs22 3xl:text-fs27 font-light lg:text-fs17 text-fs16 text-gray_900 text-left w-[49%] xl:text-fs20"
                inputClassName="bg-deep_purple_A200 rounded-radius2 mr-[5px]"
                id="3"
                width={458}
                left={0}
                right={0}
                compType="CheckBox"
                name="Group3"
                label={`A description of the features or benefits of the product;`}
              ></CheckBox>
              <Text
                className="2xl:ml-[49px] 2xl:text-fs22 3xl:ml-[59px] 3xl:text-fs27 font-bold lg:ml-[38px] lg:text-fs17 ml-[35px] text-deep_purple_A200 text-fs16 text-left xl:ml-[43px] xl:text-fs20"
                id="I1509:852;1509:785"
                width={14}
                left={35}
                right={0}
                compType="Text"
              >{`2.`}</Text>
              <Text
                className="2xl:ml-[16px] 2xl:text-fs22 3xl:ml-[20px] 3xl:text-fs27 font-light lg:ml-[13px] lg:text-fs17 ml-[12px] text-fs16 text-gray_900 text-left xl:ml-[15px] xl:text-fs20"
                id="I1509:852;1509:786"
                width={435}
                left={12}
                right={0}
                compType="Text"
              >{`A description of the features or benefits of the product;`}</Text>
            </Row>
            <Row
              className="2xl:mr-[37px] 2xl:my-[5px] 3xl:mr-[45px] 3xl:my-[6px] font-poppins items-center justify-start lg:mr-[29px] mr-[27px] my-[4px] w-[98%] xl:mr-[33px] xl:my-[5px]"
              id="1509:855"
              width={927}
              left={0}
              right={27}
              compType="Row"
            >
              <CheckBox
                className="2xl:text-fs22 3xl:text-fs27 font-light lg:text-fs17 text-fs16 text-gray_900 text-left w-[48%] xl:text-fs20"
                inputClassName="bg-deep_purple_A200 rounded-radius2 mr-[5px]"
                id="4"
                width={439}
                left={0}
                right={0}
                compType="CheckBox"
                name="Group4"
                label={`An overview of facts about the brand or company;`}
              ></CheckBox>
              <Text
                className="2xl:ml-[75px] 2xl:text-fs22 3xl:ml-[91px] 3xl:text-fs27 font-bold lg:ml-[59px] lg:text-fs17 ml-[54px] text-deep_purple_A200 text-fs16 text-left xl:ml-[67px] xl:text-fs20"
                id="I1509:855;1509:785"
                width={15}
                left={54}
                right={0}
                compType="Text"
              >{`3.`}</Text>
              <Text
                className="2xl:ml-[16px] 2xl:text-fs22 3xl:ml-[20px] 3xl:text-fs27 font-light lg:ml-[13px] lg:text-fs17 ml-[12px] text-fs16 text-gray_900 text-left xl:ml-[15px] xl:text-fs20"
                id="I1509:855;1509:786"
                width={407}
                left={12}
                right={0}
                compType="Text"
              >{`An overview of facts about the brand or company;`}</Text>
            </Row>
          </List>
        </Column>
        <Column
          className="2xl:mt-[11px] 3xl:mt-[13px] items-center mt-[8px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]"
          id="129"
          width={1134}
          left={0}
          right={0}
          compType="Column"
        >
          <Row
            className="font-poppins justify-end mx-[auto] self-stretch w-[100%]"
            id="99"
            width={1134}
            left={0}
            right={0}
            compType="Row"
          >
            <Image
              src="img_bulletlist.png"
              className="2xl:h-[34px] 2xl:mb-[33px] 2xl:ml-[168px] 3xl:h-[41px] 3xl:mb-[40px] 3xl:ml-[202px] h-[24px] lg:h-[27px] lg:mb-[26px] lg:ml-[131px] mb-[24px] ml-[120px] w-[1%] xl:h-[31px] xl:mb-[30px] xl:ml-[150px]"
              id="I1509:723;1509:683"
              width={8}
              left={120}
              right={0}
              compType="Image"
              alt="BulletList"
            />
            <Text
              className="2xl:ml-[16px] 2xl:text-fs22 3xl:ml-[20px] 3xl:text-fs27 font-light lg:ml-[13px] lg:text-fs17 ml-[12px] text-fs16 text-gray_900 text-left w-[37%] xl:ml-[15px] xl:text-fs20"
              id="I1509:723;1509:682"
              width={419}
              left={12}
              right={0}
              compType="Text"
            >{`Listing goals, conclusions, and other important points in the text;`}</Text>
            <Text
              className="2xl:mb-[33px] 2xl:ml-[75px] 2xl:text-fs22 3xl:mb-[40px] 3xl:ml-[91px] 3xl:text-fs27 font-bold lg:mb-[26px] lg:ml-[59px] lg:text-fs17 mb-[24px] ml-[54px] text-deep_purple_A200 text-fs16 text-left xl:mb-[30px] xl:ml-[67px] xl:text-fs20"
              id="I1509:858;1509:785"
              width={16}
              left={54}
              right={0}
              compType="Text"
            >{`4.`}</Text>
            <Text
              className="2xl:ml-[16px] 2xl:mr-[122px] 2xl:text-fs22 3xl:ml-[20px] 3xl:mr-[146px] 3xl:text-fs27 font-light lg:ml-[13px] lg:mr-[95px] lg:text-fs17 ml-[12px] mr-[87px] text-fs16 text-gray_900 text-left w-[36%] xl:ml-[15px] xl:mr-[108px] xl:text-fs20"
              id="I1509:858;1509:786"
              width={406}
              left={12}
              right={87}
              compType="Text"
            >{`Listing goals, conclusions, and other important points in the text;`}</Text>
          </Row>
          <Row
            className="2xl:ml-[168px] 2xl:mr-[122px] 2xl:mt-[11px] 3xl:ml-[202px] 3xl:mr-[146px] 3xl:mt-[13px] font-poppins items-center justify-start lg:ml-[131px] lg:mr-[95px] ml-[120px] mr-[87px] mt-[8px] w-[82%] xl:ml-[150px] xl:mr-[108px] xl:mt-[10px]"
            id="1509:864"
            width={927}
            left={120}
            right={87}
            compType="Row"
          >
            <CheckBox
              className="2xl:text-fs22 3xl:text-fs27 font-light lg:text-fs17 text-fs16 text-gray_900 text-left w-[48%] xl:text-fs20"
              inputClassName="bg-deep_purple_A200 rounded-radius2 mr-[5px]"
              id="5"
              width={439}
              left={0}
              right={0}
              compType="CheckBox"
              name="Group5"
              label={`Adding testimonials.`}
            ></CheckBox>
            <Text
              className="2xl:ml-[75px] 2xl:text-fs22 3xl:ml-[91px] 3xl:text-fs27 font-bold lg:ml-[59px] lg:text-fs17 ml-[54px] text-deep_purple_A200 text-fs16 text-left xl:ml-[67px] xl:text-fs20"
              id="I1509:864;1509:785"
              width={15}
              left={54}
              right={0}
              compType="Text"
            >{`5.`}</Text>
            <Text
              className="2xl:ml-[16px] 2xl:text-fs22 3xl:ml-[20px] 3xl:text-fs27 font-light lg:ml-[13px] lg:text-fs17 ml-[12px] text-fs16 text-gray_900 text-left xl:ml-[15px] xl:text-fs20"
              id="I1509:864;1509:786"
              width={407}
              left={12}
              right={0}
              compType="Text"
            >{`Adding testimonials.`}</Text>
          </Row>
          <Row
            className="2xl:mt-[36px] 3xl:mt-[43px] font-poppins items-center justify-start lg:mt-[28px] mt-[26px] mx-[auto] self-stretch w-[100%] xl:mt-[32px]"
            id="100"
            width={1134}
            left={0}
            right={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[168px] 2xl:text-fs25 3xl:ml-[202px] 3xl:text-fs30 font-semibold lg:ml-[131px] lg:text-fs19 ml-[120px] text-fs18 text-gray_900 text-left xl:ml-[150px] xl:text-fs22"
              id="1878:25098"
              width={55}
              left={120}
              right={0}
              compType="Text"
            >{`Offset`}</Text>
            <Text
              className="2xl:ml-[616px] 2xl:mr-[655px] 2xl:text-fs25 3xl:ml-[739px] 3xl:mr-[786px] 3xl:text-fs30 font-semibold lg:ml-[479px] lg:mr-[509px] lg:text-fs19 ml-[438px] mr-[466px] text-fs18 text-gray_900 text-left xl:ml-[547px] xl:mr-[582px] xl:text-fs22"
              id="1879:25099"
              width={55}
              left={438}
              right={466}
              compType="Text"
            >{`Offset`}</Text>
          </Row>
        </Column>
        <List
          className="2xl:gap-[295px] 2xl:mt-[21px] 2xl:mx-[168px] 3xl:gap-[354px] 3xl:mt-[25px] 3xl:mx-[202px] flex-wrap gap-[210px] grid grid-cols-2 lg:gap-[229px] lg:mt-[16px] lg:mx-[131px] max-w-[780px] min-h-[auto] mt-[15px] mx-[120px] overflow-x-hidden overflow-y-hidden w-[69%] xl:gap-[262px] xl:mt-[18px] xl:mx-[150px]"
          id="103"
          width={780}
          left={120}
          right={120}
          compType="List"
          orientation="horizontal"
        >
          <Stack
            className="2xl:h-[79px] 3xl:h-[95px] h-[56px] lg:h-[62px] w-[100%] xl:h-[71px]"
            id="118"
            width={285}
            left={0}
            right={0}
            compType="Stack"
          >
            <Stack
              className="2xl:h-[79px] 3xl:h-[95px] absolute bottom-[0] font-poppins h-[56px] left-[0] lg:h-[62px] right-[0] self-stretch top-[0] w-[100%] xl:h-[71px]"
              id="120"
              width={285}
              left={0}
              right={0}
              compType="Stack"
            >
              <Row
                className="absolute border border-bluegray_100 border-solid font-poppins items-center justify-start self-stretch top-[0] w-[100%]"
                id="1878:25054"
                width={285}
                left={0}
                right={0}
                compType="Row"
              >
                <Image
                  src="img_bulletlist.png"
                  className="2xl:h-[34px] 3xl:h-[41px] h-[24px] lg:h-[27px] w-[3%] xl:h-[31px]"
                  id="I1878:25054;1509:683"
                  width={8}
                  left={0}
                  right={0}
                  compType="Image"
                  alt="BulletList"
                />
                <Text
                  className="2xl:ml-[16px] 2xl:text-fs22 3xl:ml-[20px] 3xl:text-fs27 font-light lg:ml-[13px] lg:text-fs17 ml-[12px] text-fs16 text-gray_900 text-left xl:ml-[15px] xl:text-fs20"
                  id="I1878:25054;1509:682"
                  width={265}
                  left={12}
                  right={0}
                  compType="Text"
                >{`Marked List`}</Text>
              </Row>
              <Button
                className="2xl:left-[12px] 2xl:pb-[37px] 2xl:pt-[35px] 2xl:text-fs5 3xl:left-[15px] 3xl:pb-[44px] 3xl:pt-[42px] 3xl:text-fs6 absolute bg-purple_A400_7e border-bw font-intro font-normal left-[9px] lg:pb-[28px] lg:pt-[27px] pb-[26.4px] pt-[25.4px] px-[1px] text-center text-fs4 text-gray_900 w-[5%] xl:left-[11px] xl:pb-[33px] xl:pt-[31px] xl:text-fs5"
                id="1878:25068"
                width={12}
                left={9}
                right={0}
                compType="Button"
              >{`12px`}</Button>
            </Stack>
            <Column
              className="absolute bottom-[0] font-intro justify-start self-stretch w-[100%]"
              id="121"
              width={285}
              left={0}
              right={0}
              compType="Column"
            >
              <Button
                className="2xl:ml-[343px] 2xl:pb-[5px] 2xl:pl-[26px] 2xl:pr-[25px] 2xl:pt-[3px] 3xl:ml-[411px] 3xl:pb-[6px] 3xl:pl-[32px] 3xl:pr-[30px] 3xl:pt-[4px] 3xl:text-fs3 bg-purple_A200_7e border-bw font-bold lg:ml-[266px] lg:pb-[4px] lg:pl-[20px] lg:pr-[19px] lg:pt-[2px] ml-[244px] pb-[3.7px] pl-[19px] pr-[18px] pt-[2.7px] text-center text-fs2 text-gray_900 w-[15%] xl:ml-[305px] xl:pb-[4px] xl:pl-[23px] xl:pr-[22px] xl:pt-[3px]"
                id="1878:25071"
                width={41}
                left={244}
                right={0}
                compType="Button"
              >{`8px`}</Button>
              <Column
                className="font-poppins items-center mx-[auto] self-stretch w-[100%]"
                id="130"
                width={285}
                left={0}
                right={0}
                compType="Column"
              >
                <CheckBox
                  className="2xl:text-fs22 3xl:text-fs27 font-light lg:text-fs17 mx-[auto] self-stretch text-fs16 text-gray_900 text-left w-[100%] xl:text-fs20"
                  inputClassName="bg-deep_purple_A200 rounded-radius2 mr-[5px]"
                  id="6"
                  width={285}
                  left={0}
                  right={0}
                  compType="CheckBox"
                  name="Group6"
                  label={`Marked List`}
                ></CheckBox>
              </Column>
            </Column>
          </Stack>
          <Stack
            className="2xl:h-[79px] 3xl:h-[95px] h-[56px] lg:h-[62px] w-[100%] xl:h-[71px]"
            id="123"
            width={285}
            left={210}
            right={0}
            compType="Stack"
          >
            <Stack
              className="2xl:h-[79px] 3xl:h-[95px] absolute bottom-[0] font-poppins h-[56px] left-[0] lg:h-[62px] right-[0] self-stretch top-[0] w-[100%] xl:h-[71px]"
              id="125"
              width={285}
              left={0}
              right={0}
              compType="Stack"
            >
              <Row
                className="absolute border border-bluegray_100 border-solid font-poppins items-center justify-start self-stretch top-[0] w-[100%]"
                id="1509:904"
                width={285}
                left={0}
                right={0}
                compType="Row"
              >
                <Text
                  className="2xl:text-fs22 3xl:text-fs27 font-bold lg:text-fs17 text-deep_purple_A200 text-fs16 text-left xl:text-fs20"
                  id="I1509:904;1509:785"
                  width={11}
                  left={0}
                  right={0}
                  compType="Text"
                >{`1.`}</Text>
                <Text
                  className="2xl:ml-[16px] 2xl:text-fs22 3xl:ml-[20px] 3xl:text-fs27 font-light lg:ml-[13px] lg:text-fs17 ml-[12px] text-fs16 text-gray_900 text-left xl:ml-[15px] xl:text-fs20"
                  id="I1509:904;1509:786"
                  width={262}
                  left={12}
                  right={0}
                  compType="Text"
                >{`Numbered list`}</Text>
              </Row>
              <Button
                className="2xl:left-[16px] 2xl:pb-[37px] 2xl:pt-[35px] 2xl:text-fs5 3xl:left-[20px] 3xl:pb-[44px] 3xl:pt-[42px] 3xl:text-fs6 absolute bg-purple_A400_7e border-bw font-intro font-normal left-[12px] lg:left-[13px] lg:pb-[28px] lg:pt-[27px] pb-[26.4px] pt-[25.4px] px-[1px] text-center text-fs4 text-gray_900 w-[5%] xl:left-[15px] xl:pb-[33px] xl:pt-[31px] xl:text-fs5"
                id="1878:25078"
                width={12}
                left={12}
                right={0}
                compType="Button"
              >{`12px`}</Button>
            </Stack>
            <Column
              className="absolute bottom-[0] font-intro justify-start self-stretch w-[100%]"
              id="126"
              width={285}
              left={0}
              right={0}
              compType="Column"
            >
              <Button
                className="2xl:ml-[343px] 2xl:pb-[5px] 2xl:pl-[26px] 2xl:pr-[25px] 2xl:pt-[3px] 3xl:ml-[411px] 3xl:pb-[6px] 3xl:pl-[32px] 3xl:pr-[30px] 3xl:pt-[4px] 3xl:text-fs3 bg-purple_A200_7e border-bw font-bold lg:ml-[266px] lg:pb-[4px] lg:pl-[20px] lg:pr-[19px] lg:pt-[2px] ml-[244px] pb-[3.7px] pl-[19px] pr-[18px] pt-[2.7px] text-center text-fs2 text-gray_900 w-[15%] xl:ml-[305px] xl:pb-[4px] xl:pl-[23px] xl:pr-[22px] xl:pt-[3px]"
                id="1878:25079"
                width={41}
                left={244}
                right={0}
                compType="Button"
              >{`8px`}</Button>
              <Column
                className="items-center mx-[auto] self-stretch w-[100%]"
                id="131"
                width={285}
                left={0}
                right={0}
                compType="Column"
              >
                <Row
                  className="border border-bluegray_100 border-solid font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]"
                  id="1509:905"
                  width={285}
                  left={0}
                  right={0}
                  compType="Row"
                >
                  <Text
                    className="2xl:text-fs22 3xl:text-fs27 font-bold lg:text-fs17 text-deep_purple_A200 text-fs16 text-left xl:text-fs20"
                    id="I1509:905;1509:785"
                    width={14}
                    left={0}
                    right={0}
                    compType="Text"
                  >{`2.`}</Text>
                  <Text
                    className="2xl:ml-[16px] 2xl:text-fs22 3xl:ml-[20px] 3xl:text-fs27 font-light lg:ml-[13px] lg:text-fs17 ml-[12px] text-fs16 text-gray_900 text-left xl:ml-[15px] xl:text-fs20"
                    id="I1509:905;1509:786"
                    width={259}
                    left={12}
                    right={0}
                    compType="Text"
                  >{`Numbered list`}</Text>
                </Row>
              </Column>
            </Column>
          </Stack>
        </List>
      </Column>
    </Column>
  );
};

export default TypographyListPage;
