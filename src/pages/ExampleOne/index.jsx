import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, SelectBox, Input } from "../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Weekly", value: "Weekly" },
  { label: "Monthly", value: "Monthly" },
  { label: "Yearly", value: "Yearly" },
];

export default function ExampleOnePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Debajyoti's Application5</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50">



{/* Navbar start */}
<div className="flex md:flex-col justify-center items-center w-[80%] ml-auto mr-4 mt-10">
                <Text as="p" className="mb-2.5 !text-gray-900_01 ">
                  Metrics looking good, Snow!
                </Text>
                <Input
                  name="search"
                  placeholder="Search"
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e)}
                  prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                  suffix={
                    searchBarValue?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#6a6a6aff" />
                    ) : null
                  }
                  className="flex items-center justify-center h-[48px] ml-[156px] gap-5 px-[34px] sm:px-5 text-gray-700_7e text-base font-medium border-blue_gray-400 border border-solid flex-1 rounded"
                />
                <div className="flex justify-between items-center w-[15%] md:w-full ml-[122px] gap-5">
                  <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                  <div className="flex flex-col">
                    <Text size="lg" as="p" className="!text-gray-900_01">
                      Snow Olohijere
                    </Text>
                    <Text size="s" as="p" className="!text-gray-900_7e !font-normal opacity-0.4">
                      uch231@gmail.com
                    </Text>
                  </div>
                </div>
              </div>
              {/* Navbar end */}



        <div className="flex md:flex-col justify-center items-start">
          <Sidebar
            width="220px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            className="flex flex-col h-screen gap-[53px] top-0 py-[21px] sm:py-5 bg-white-A700 !sticky overflow-auto"
          >
            <Img src="images/img_group_1.svg" alt="image" className="h-[19px] mt-[25px]" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "10px 10px 10px 30px",
                  gap: "16px",
                  alignSelf: "start",
                  color: "#323232",
                  fontWeight: 400,
                  fontSize: "20px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    fontWeight: "500 !important",
                    backgroundColor: "#0ea34a !important",
                  },
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "412px" } }}
              className="flex flex-col self-stretch w-full"
            >
              <div className="flex flex-col pt-[18px] gap-[18px]">
                <MenuItem
                  icon={
                    <Img
                      src="images/img_ic_baseline_dashboard.svg"
                      alt="icbaseline_one"
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_uim_analytics.svg" alt="uimanalytics" className="h-[24px] w-[24px]" />}
                >
                  Analytics
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_fluent_people_c.svg" alt="fluentpeoplec" className="h-[24px] w-[24px]" />}
                >
                  Communities
                </MenuItem>
                <MenuItem icon={<Img src="images/img_vector.svg" alt="vector_one" className="h-[16px]" />}>
                  Notifications
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_material_symbol.svg" alt="materialsymbol" className="h-[24px] w-[24px]" />}
                >
                  Media
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_material_symbol_blue_gray_900.svg"
                      alt="materialsymbol"
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  Support
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_carbon_settings.svg" alt="carbonsettings" className="h-[24px] w-[24px]" />}
                >
                  Settings
                </MenuItem>
              </div>
              <div className="flex justify-center pt-[18px]">
                <MenuItem
                  icon={
                    <Img src="images/img_ic_baseline_log_out.svg" alt="icbaselinelog" className="h-[24px] w-[24px]" />
                  }
                >
                  Log-out
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>


            <div className="flex justify-center w-[92%] md:w-full">
              <div className="flex flex-col w-full px-10 py-5">
                <div className="flex justify-between items-center gap-5">
                  <Text size="2xl" as="p" className="!text-gray-900_01">
                    Performance Metrics
                  </Text>
                  <div className="flex flex-col self-end w-[13%]">
                    <Text size="lg" as="p" className="!text-green-A700">
                      Download Summary
                    </Text>
                    <div className="h-px bg-green-A700" />
                  </div>
                </div>
                <div className="flex md:flex-col mt-[17px] gap-9">
                  <div className="flex w-full p-4 bg-white-A700 rounded">
                    <div className="flex flex-col w-full mb-[7px] gap-3">
                      <div className="flex justify-between ml-[3px] gap-5">
                        <Text size="lg" as="p" className="self-end">
                          Followers
                        </Text>
                        <Img
                          src="images/img_iconoir_arrow_tr.svg"
                          alt="followers_two"
                          className="self-start h-[20px] w-[20px]"
                        />
                      </div>
                      <Text size="3xl" as="p" className="ml-[3px] !text-gray-900_01">
                        93.2k
                      </Text>
                      <div className="flex justify-between items-center gap-5">
                        <div className="flex self-end justify-between items-center gap-5">
                          <div className="flex justify-center items-center gap-1">
                            <Img
                              src="images/img_iconoir_arrow_tr_green_a700.svg"
                              alt="image"
                              className="h-[22px] w-[22px]"
                            />
                            <Text size="lg" as="p" className="!text-green-A700">
                              0.8%
                            </Text>
                          </div>
                          <Text size="lg" as="p" className="self-end">
                            in the last 7 days
                          </Text>
                        </div>
                        <Img src="images/img_uim_analytics_green_a700.svg" alt="image_one" className="h-[24px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full p-4 bg-white-A700 rounded">
                    <div className="flex flex-col w-full mb-[7px] gap-3">
                      <div className="flex justify-between ml-[3px] gap-5">
                        <Text size="lg" as="p" className="self-end">
                          Likes
                        </Text>
                        <Img
                          src="images/img_iconoir_arrow_tr.svg"
                          alt="iconoirarrow"
                          className="self-start h-[20px] w-[20px]"
                        />
                      </div>
                      <Text size="3xl" as="p" className="ml-[3px] !text-gray-900_01">
                        400k
                      </Text>
                      <div className="flex items-center">
                        <div className="flex self-end items-center gap-[3px]">
                          <Img
                            src="images/img_iconoir_arrow_tr_green_a700.svg"
                            alt="iconoirarrow"
                            className="h-[22px] w-[22px]"
                          />
                          <Text size="lg" as="p" className="!text-green-A700">
                            1.21%
                          </Text>
                        </div>
                        <Text size="lg" as="p" className="self-end">
                          in the last 7 days
                        </Text>
                        <Img
                          src="images/img_uim_analytics_green_a700.svg"
                          alt="uimanalytics"
                          className="h-[24px] ml-[55px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full p-4 bg-white-A700 rounded">
                    <div className="flex flex-col w-full mb-[7px] gap-3">
                      <div className="flex justify-between ml-[3px] gap-5">
                        <Text size="lg" as="p" className="self-end">
                          Comments
                        </Text>
                        <Img
                          src="images/img_iconoir_arrow_tr.svg"
                          alt="iconoirarrow"
                          className="self-start h-[20px] w-[20px]"
                        />
                      </div>
                      <Text size="3xl" as="p" className="ml-[3px] !text-gray-900_01">
                        289.1k
                      </Text>
                      <div className="flex justify-between items-center gap-5">
                        <div className="flex self-end justify-between items-center gap-5">
                          <div className="flex justify-center items-center gap-1">
                            <Img
                              src="images/img_iconoir_arrow_tr_green_a700.svg"
                              alt="iconoirarrow"
                              className="h-[22px] w-[22px]"
                            />
                            <Text size="lg" as="p" className="!text-green-A700">
                              2.7%
                            </Text>
                          </div>
                          <Text size="lg" as="p" className="self-end">
                            in the last 7 days
                          </Text>
                        </div>
                        <Img src="images/img_uim_analytics_green_a700.svg" alt="uimanalytics" className="h-[24px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-between items-center w-[74%] md:w-full mt-8 gap-5">
                  <div className="flex justify-between items-center w-[69%] md:w-full gap-5">
                    <Text as="p" className="self-end !text-gray-900_01">
                      Engagement Rates
                    </Text>
                    <SelectBox
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                      name="weekly"
                      placeholder="Weekly"
                      options={dropDownOptions}
                      className="flex w-[18%] pl-3.5 pr-[33px] gap-px py-1.5 sm:pr-5 text-gray-900_01 text-base bg-zinc-300 rounded"
                    />
                  </div>
                  <Text as="p" className="self-end !text-gray-900_01">
                    Audience Demography
                  </Text>
                </div>
                <div className="flex md:flex-col items-start mt-5 gap-[46px]">
                  <div className="flex flex-col flex-1">
                    <div className="p-[19px] bg-white-A700 rounded">
                      <div className="ml-[3px]">
                        <div className="flex sm:flex-col justify-between items-start gap-5">
                          <div className="flex flex-col items-end gap-[31px]">
                            <Text as="p" className="self-start">
                              100
                            </Text>
                            <Text as="p" className="h-[24px]">
                              80
                            </Text>
                            <Text as="p" className="h-[24px]">
                              60
                            </Text>
                            <Text as="p" className="h-[24px]">
                              40
                            </Text>
                            <Text as="p" className="h-[24px]">
                              20
                            </Text>
                            <Text as="p" className="mr-[5px]">
                              0
                            </Text>
                          </div>
                          <div className="flex flex-col mt-3 flex-1">
                            <div className="h-px opacity-0.3 bg-blue_gray-400_75" />
                            <div className="h-[274px] mt-1 relative">
                              <div className="flex flex-col w-full bottom-0 right-0 left-0 m-auto absolute">
                                <div className="flex sm:flex-col items-center z-[1]">
                                  <div className="self-end h-px w-full opacity-0.3 bg-blue_gray-400_75 flex-1" />
                                  <div className="h-[225px] w-[8%] ml-[-40px] opacity-0.1 bg-green-A700_63 rounded" />
                                </div>
                                <div className="flex justify-between items-center w-[24%] md:w-full mt-[-86px] gap-5">
                                  <div className="h-[86px] w-[36%] opacity-0.1 bg-green-A700_63 rounded" />
                                  <div className="self-end h-[57px] w-[36%] opacity-0.1 bg-green-A700_63 rounded" />
                                </div>
                              </div>
                              <div className="h-px w-full bottom-[40%] right-0 left-0 m-auto opacity-0.3 bg-blue_gray-400_75 absolute" />
                              <div className="h-px w-full top-[39%] right-0 left-0 m-auto opacity-0.3 bg-blue_gray-400_75 absolute" />
                              <div className="h-px w-full top-[19%] right-0 left-0 m-auto opacity-0.3 bg-blue_gray-400_75 absolute" />
                              <div className="h-[180px] w-[12%] bottom-0 left-[31%] m-auto opacity-0.1 bg-green-A700_63 absolute rounded" />
                              <div className="h-[133px] w-[8%] bottom-0 right-0 left-0 m-auto opacity-0.1 bg-green-A700_63 absolute rounded" />
                              <div className="h-[274px] w-[12%] mr-36 right-[30%] bottom-0 top-0 my-auto opacity-0.1 bg-green-A700_63 absolute rounded" />
                              <div className="h-[154px] w-[10%] bottom-0 right-[15%] m-auto opacity-0.1 bg-green-A700_63 absolute rounded" />
                            </div>
                            <div className="h-px opacity-0.5 bg-blue_gray-400_87" />
                            <div className="flex sm:flex-col justify-center mt-2.5">
                              <Text as="p">Mon</Text>
                              <Text as="p" className="ml-[30px]">
                                Tue
                              </Text>
                              <Text as="p" className="ml-9">
                                Wed
                              </Text>
                              <Text as="p" className="ml-[30px]">
                                Thur
                              </Text>
                              <Text as="p" className="ml-[38px]">
                                Fri
                              </Text>
                              <Text as="p" className="ml-[47px]">
                                Sat
                              </Text>
                              <Text as="p" className="ml-[42px]">
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text as="p" className="mt-7 !text-gray-900_01 !font-medium">
                      Post Activity
                    </Text>
                    <div className="flex flex-col mt-[13px] gap-[31px] py-[17px] bg-white-A700 rounded">
                      <div className="flex sm:flex-col justify-between items-center pb-2.5 gap-5 px-2.5 flex-1">
                        <div className="flex sm:flex-col justify-center items-end w-[78%] sm:w-full ml-2.5">
                          <div className="flex justify-center items-center w-[70%] sm:w-full gap-2">
                            <Img
                              src="images/img_rectangle_21.png"
                              alt="image"
                              className="w-[36px] object-cover rounded"
                            />
                            <Text size="s" as="p" className="self-end w-[81%] !text-gray-900_01 !font-normal">
                              <>
                                Success can be achieved by
                                <br />
                                being bold enough...
                              </>
                            </Text>
                          </div>
                          <Text size="s" as="p" className="mb-2 ml-[58px] !text-blue_gray-900">
                            May 30
                          </Text>
                          <div className="flex justify-center items-center mb-1.5 ml-[75px] gap-2">
                            <Button className="flex items-center justify-center h-[20px] w-[20px] bg-green-A700 rounded-[50%]">
                              <Img src="images/img_ion_eye_sharp.svg" />
                            </Button>
                            <Text size="s" as="p" className="!text-blue_gray-900">
                              1.1k
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_svg_spinners_3_dots_move.svg"
                          alt="image_one"
                          className="self-end h-[20px] w-[20px] mr-3.5"
                        />
                      </div>
                      <div className="w-full h-px bg-blue_gray-400_67" />
                      <div className="flex justify-between items-end mb-[34px] pb-2.5 gap-5 px-2.5 flex-1">
                        <div className="flex justify-center items-end w-[56%] ml-2.5">
                          <Img
                            src="images/img_rectangle_22.png"
                            alt="image"
                            className="w-[36px] object-cover rounded"
                          />
                          <Text size="s" as="p" className="w-[68%] ml-2 !text-gray-900_01 !font-normal">
                            <>
                              Knowing what to do can never
                              <br />
                              be okay, you have to...
                            </>
                          </Text>
                          <Text size="s" as="p" className="mb-2 ml-[47px] !text-blue_gray-900">
                            May 30
                          </Text>
                        </div>
                        <div className="flex justify-center items-center mb-1.5 gap-2">
                          <Button className="flex items-center justify-center h-[20px] w-[20px] bg-green-A700 rounded-[50%]">
                            <Img src="images/img_ion_eye_sharp.svg" />
                          </Button>
                          <Text size="s" as="p" className="!text-blue_gray-900">
                            3.1k
                          </Text>
                        </div>
                        <Img
                          src="images/img_svg_spinners_3_dots_move.svg"
                          alt="svgspinnersthre"
                          className="h-[20px] w-[20px] mb-1 mr-3.5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[47%] md:w-full gap-[13px] py-3 bg-white-A700 rounded">
                    <div className="self-stretch">
                      <div className="flex flex-col">
                        <div className="flex sm:flex-col justify-end w-[85%] md:w-full gap-5">
                          <div className="flex justify-end items-center w-[25%] sm:w-full gap-2">
                            <div className="h-[8px] w-[8px] bg-blue_gray-900_01 rounded-[50%]" />
                            <Text size="s" as="p" className="!font-normal">
                              Male
                            </Text>
                          </div>
                          <div className="flex justify-center items-center gap-2 flex-1">
                            <div className="h-[8px] w-[8px] bg-green-A700 rounded-[50%]" />
                            <Text size="s" as="p" className="!font-normal">
                              Female
                            </Text>
                          </div>
                          <div className="flex justify-center items-center gap-2 flex-1">
                            <div className="h-[8px] w-[8px] bg-yellow-400 rounded-[50%]" />
                            <Text size="s" as="p" className="!font-normal">
                              Other
                            </Text>
                          </div>
                        </div>
                        <div className="flex justify-between w-[57%] md:w-full mt-[31px] ml-8 gap-5">
                          <Text size="lg" as="p" className="self-start !text-gray-900">
                            Gender
                          </Text>
                          <Text size="lg" as="p" className="self-end !text-gray-900">
                            Age Group
                          </Text>
                        </div>
                        <div className="flex sm:flex-col justify-between items-center w-[93%] md:w-full mt-[19px] ml-[19px] gap-5">
                          <div className="flex justify-center w-[34%] sm:w-full">
                            <div className="flex flex-col w-full">
                              <div className="flex items-start">
                                <Text size="s" as="p" className="mt-[57px] !text-gray-900 z-[1]">
                                  35%
                                </Text>
                                <div className="h-[140px] w-[140px] ml-[-13px] flex-1 relative">
                                  <div className="justify-center h-[140px] w-[140px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                                    <div className="justify-center h-[140px] w-[140px] left-0 bottom-0 right-0 top-0 m-auto rotate-[-161deg] bg-blue_gray-900_01 absolute rounded-[50%]" />
                                    <CircularProgressbar
                                      strokeWidth={11}
                                      value={46}
                                      styles={{ trail: { stroke: "#fff853" }, path: { strokeLinecap: "square" } }}
                                      className="justify-center h-[109px] w-[78%] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                  </div>
                                  <div className="flex justify-end w-[19%] right-[4%] top-[13%] m-auto absolute">
                                    <Text size="s" as="p" className="!text-gray-900">
                                      55%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-[25%] md:w-full mt-[-13px] ml-[60px] z-[1]">
                                <Text size="s" as="p" className="!text-gray-900">
                                  15%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-[55%] sm:w-full gap-4">
                            <div className="flex items-center">
                              <Text
                                size="s"
                                as="p"
                                className="flex justify-center items-center h-[24px] pl-[9px] pr-[35px] py-1 sm:pr-5 !text-white-A700 bg-blue_gray-900_01"
                              >
                                16-25
                              </Text>
                              <div className="h-[24px] bg-green-A700 flex-1" />
                              <div className="h-[24px] w-[15%] bg-yellow-400" />
                              <div className="flex self-start w-[11%] ml-1">
                                <Text size="s" as="p" className="!text-gray-900">
                                  40%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row sm:flex-col w-[78%] md:w-full gap-4">
                              <div className="flex justify-center items-start gap-1 flex-1">
                                <div className="h-[24px] flex-1 relative">
                                  <Img
                                    src="images/img_group_9.svg"
                                    alt="image"
                                    className="justify-center h-[24px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <Text
                                    size="s"
                                    as="p"
                                    className="left-[5%] top-[14%] m-auto !text-white-A700 absolute"
                                  >
                                    25-35
                                  </Text>
                                </div>
                                <Text size="s" as="p" className="mt-[3px] !text-gray-900">
                                  30%
                                </Text>
                              </div>
                              <div className="flex items-start mr-[55px] gap-1 flex-1">
                                <div className="h-[24px] flex-1 relative">
                                  <Img
                                    src="images/img_group_9.svg"
                                    alt="image"
                                    className="justify-center h-[24px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <Text
                                    size="s"
                                    as="p"
                                    className="left-[8%] top-[14%] m-auto !text-white-A700 absolute"
                                  >
                                    35-55
                                  </Text>
                                </div>
                                <Text size="s" as="p" className="mt-[3px] !text-gray-900">
                                  20%
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start w-[33%] md:w-full gap-1">
                              <div className="h-[24px] flex-1 relative">
                                <Img
                                  src="images/img_group_8.svg"
                                  alt="image_one"
                                  className="justify-center h-[24px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <Text size="s" as="p" className="left-[16%] top-[14%] m-auto !text-white-A700 absolute">
                                  55+
                                </Text>
                              </div>
                              <Text size="s" as="p" className="mt-[3px] !text-gray-900">
                                10%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="h-px mt-[23px] opacity-0.1 bg-blue_gray-400_63" />
                      </div>
                    </div>
                    <div className="flex flex-col w-[87%] md:w-full mb-0.5 gap-4">
                      <div className="flex justify-between items-center gap-5">
                        <Text size="lg" as="p" className="self-end !text-gray-900">
                          Top Locations
                        </Text>
                        <Button className="flex items-center justify-center h-[32px] px-[18px] text-green-A700 text-center text-sm border-green-A700 border border-solid min-w-[100px] rounded">
                          See More
                        </Button>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between gap-5">
                            <Text size="s" as="p" className="self-end !text-blue_gray-400">
                              Country
                            </Text>
                            <Text size="s" as="p" className="self-start !text-blue_gray-400">
                              Visitors
                            </Text>
                          </div>
                          <div className="h-px opacity-0.3 bg-blue_gray-400_75" />
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col mr-[3px] gap-[9px] flex-1">
                            <div className="flex justify-between items-center gap-5">
                              <Text size="md" as="p" className="self-end !text-gray-900">
                                Nigeria
                              </Text>
                              <div className="flex flex-col items-end gap-0.5">
                                <Text size="md" as="p" className="!text-gray-900">
                                  5,430
                                </Text>
                                <div className="flex justify-end items-center">
                                  <Img
                                    src="images/img_iconoir_arrow_tr_green_a700.svg"
                                    alt="image"
                                    className="h-[11px] w-[11px]"
                                  />
                                  <Text size="xs" as="p" className="!text-green-A700">
                                    2.2%
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="h-px opacity-0.1 bg-blue_gray-400_63" />
                          </div>
                          <div className="flex flex-col mr-[3px] gap-[9px] flex-1">
                            <div className="flex justify-between items-center gap-5">
                              <Text size="md" as="p" className="self-end !text-gray-900">
                                Germany
                              </Text>
                              <div className="flex flex-col gap-0.5">
                                <Text size="md" as="p" className="!text-gray-900">
                                  2,610
                                </Text>
                                <div className="flex justify-center items-center">
                                  <Img
                                    src="images/img_iconoir_arrow_tr_green_a700.svg"
                                    alt="iconoirarrow"
                                    className="h-[11px] w-[11px]"
                                  />
                                  <Text size="xs" as="p" className="!text-green-A700">
                                    1.12%
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="h-px opacity-0.1 bg-blue_gray-400_63" />
                          </div>
                          <div className="flex flex-col gap-[9px] flex-1">
                            <div className="flex justify-between items-center gap-5">
                              <Text size="md" as="p" className="self-end !text-gray-900">
                                Switzerland
                              </Text>
                              <div className="flex flex-col items-start gap-0.5">
                                <Text size="md" as="p" className="!text-gray-900">
                                  1,925
                                </Text>
                                <div className="flex self-end justify-end items-center">
                                  <Img
                                    src="images/img_iconoir_arrow_tr_green_a700.svg"
                                    alt="iconoirarrow"
                                    className="h-[11px] w-[11px]"
                                  />
                                  <Text size="xs" as="p" className="!text-green-A700">
                                    1.1%
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="h-px opacity-0.1 bg-blue_gray-400_63" />
                          </div>
                          <div className="flex flex-col gap-[9px] flex-1">
                            <div className="flex justify-between items-center gap-5">
                              <Text size="md" as="p" className="self-end !text-gray-900">
                                Iraq
                              </Text>
                              <div className="flex flex-col items-start gap-0.5">
                                <Text size="md" as="p" className="self-end !text-gray-900">
                                  1,571
                                </Text>
                                <div className="flex self-center justify-center items-center">
                                  <Img
                                    src="images/img_iconoir_arrow_tr_green_a700.svg"
                                    alt="iconoirarrow"
                                    className="h-[11px] w-[11px]"
                                  />
                                  <Text size="xs" as="p" className="!text-green-A700">
                                    0.8%
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="h-px opacity-0.1 bg-blue_gray-400_63" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
