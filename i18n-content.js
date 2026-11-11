'use strict';
(() => {
 const add=window.DXB_LOCALE_ADD,D=window.DXB_LOCALE_DICTIONARY,C=window.DXB_CONTENT;
 function pair(source,translated){for(const [key,value]of Object.entries(translated)){if(typeof value==='string'&&value&&typeof source?.[key]==='string')D.set(source[key],value);else if(value&&typeof value==='object'&&source?.[key])pair(source[key],value);}}
 pair(C,{
  scenes:[['','欢迎来到真实的 DXB'],['','走进 A380 客舱'],['','机场全貌'],['','转机的四个环节'],['','航站楼与官方地图'],['','登机口的窗内与窗外'],['','走近 Sleepover 休息空间'],['','观察 Food Village 餐饮区'],['','家庭与辅助服务'],['','不同旅客的优先需求'],['','在真实标识中学习英语'],['','服务英语对话'],['','什么是好的转机体验？'],['','你最想优先改善什么？'],['','万千旅程，相遇于此']],
  journey:[
   {title:'先获得清晰的信息。',copy:'需要后续航班登机牌时，可跟随标识前往转机服务台、查看官方地图，或向机场服务大使询问。预订方式与行李安排会影响具体流程。',phrase:'“Excuse me, where can I find the transfer desk?”\n“打扰一下，请问转机服务台在哪里？”'},
   {title:'确认下一段航班的出发区域。',copy:'查看当前航班信息。T3 的 B、C 区之间可步行，A 区通过机场列车连接。实际转机方式请向航空公司或机场工作人员确认。',phrase:'“Could you tell me how to get to A Gates?”\n“请问怎样前往 A 区登机口？”'},
   {title:'让候机时间更适合自己。',copy:'明确下一步行程后，再考虑休息、用餐、工作或辅助服务。选择前先确认设施所在区域及使用条件。',phrase:'“Is there a place to rest in this concourse?”\n“这个候机廊里有可以休息的地方吗？”'},
   {title:'为下一段飞行做好准备。',copy:'关注当前航班登机信息并遵循工作人员指引。不确定下一步时主动询问。照片只用于观察机场空间，不是实时登机通知。',phrase:'“Has boarding started for my flight?”\n“我的航班开始登机了吗？”'}
  ],
  terminals:{
   T1:{title:'1 号航站楼与 D 区登机口。',copy:'T1 服务于 D 区登机口，两者由机场列车连接。照片展示 T1 值机大厅，不是 D 区候机空间。航站楼之间的转机取决于预订与航空公司安排。',caption:'1 号航站楼值机大厅，来源于官方图库。'},
   T2:{title:'2 号航站楼与 F 区登机口。',copy:'T2 对应 F 区登机口。大图为航站楼前场，小图为 T2 出发区的辅助出行休息室，两者为独立视角。',caption:'2 号航站楼出发区的辅助出行休息室。'},
   T3:{caption:'3 号航站楼前场，来自独立拍摄视角。'}
  },
  gate:{inside:{copy:'座椅、标识与登机服务台，共同构成候机准备空间。你会先确认航班显示屏、旅行证件，还是登机广播？'},outside:{title:'航站楼旁的一架飞机。',copy:'这张实拍中，一架 A380 停靠在 A 候机廊。观察双层机身、发动机短舱与周围地面设备，再与交互飞机作比较。'}},
  rest:{brand:{copy:'发光的 Sleepover 标识位于 T3 B 区接待处，让旅客在繁忙机场中容易识别这项专门的休息服务。'},counter:{title:'先询问，再选择。',copy:'在接待处比较房型、空位与价格。可以用英语询问：“What is included in this option?”——“这个选项包含哪些服务？”'},cabins:{title:'从门口认识休息空间。',copy:'实拍中的入口连接着接待处之后的休息区域。不同房型提供不同设施，打开下方照片即可近距离查看。'}},
  food:[
   {copy:'“FOOD VILLAGE DXB” 为繁忙餐饮空间提供清晰的识别名称。官方介绍将其列于 T3 C 区出发区域。',label:'区域标识'},
   {title:'多个柜台，多种选择。',copy:'多个餐饮柜台共享同一空间，旅客可以在其中选择、点餐、取餐并寻找座位。当前菜单与营业时间以现场信息为准。',label:'餐饮柜台'},
   {title:'坐下来，留一点时间。',copy:'公共座位让用餐成为航班之间的短暂停留。舒适也来自找到适合的座位，同时留意下一段航班的登机时间。',label:'公共座位'}
  ],
  support:{family:{copy:'T3 B 区的家庭活动区提供儿童游乐空间与家长座椅，让转机家庭以不同方式度过等待时间。',condition:'家庭活动区：T3 B 区出发区域。育婴室是独立服务，可向工作人员询问最近的合适地点。'},access:{title:'辅助服务也有明确的位置。',copy:'T2 出发区域的辅助出行休息室面向不同支持需求。机场介绍包括轮椅友好空间、降噪座位与舒缓区域。',condition:'此示例位于 T2。请向航空公司确认适合自己实际航站楼与旅程的辅助服务。',location:'2 号航站楼 / 出发区 / 独立示例'}},
  passengers:{
   tired:{label:'情境 01 / 疲惫的旅客',reason:'带工作空间的休息产品可能同时满足两种需求。比较产品、价格与空位，再判断它是否适合这位旅客。'},
   family:{label:'情境 02 / 转机中的家庭',quote:'“孩子需要活动一下，我们也都想吃点东西。”',reason:'游乐与用餐解决不同需求。比较 B 区家庭活动空间与 C 区 Food Village 时，也要考虑转机中位置的重要性。'},
   support:{label:'情境 03 / 需要辅助服务的旅客',quote:'“我需要清晰的方向指引，以及适合我的帮助。”',reason:'从个人需求出发。清晰指引、工作人员协助与合适空间可以共同发挥作用，但要与实际航站楼和旅程相匹配。'}
  },
  needs:{rest:{area:'T3 A/B/C · 付费休息示例'},meal:{area:'Food Village · T3 C 区'},work:{area:'Sleepover 工作空间 · 付费产品'},family:{area:'家庭活动区 · T3 B 区'},access:{area:'T2 休息室 / 航空公司辅助服务'}},
  dialogue:[
   {prompt:'想询问休息空间，你会怎样表达？',options:['“Could you tell me which rest options are available here?”\n“请问这里有哪些可用的休息选择？”','“Every cabin must be free, so I will just go in.”\n“所有休息舱肯定都是免费的，我直接进去就好。”'],response:'练习回应：“请确认该地点目前可选的产品与使用条件。”',explain:'具体、礼貌的问题便于工作人员回答，也不会先假定服务免费。'},
   {prompt:'如果还想洗个澡，应该怎样询问？',options:['“All locations include showers, right?”\n“每个地点都包含淋浴，对吗？”','“Does this option include a shower, and what does it cost?”\n“这个选项包含淋浴吗？费用是多少？”'],response:'练习回应：“设施因地点与产品而异，请确认具体包含的内容。”',explain:'机场仅在部分 Sleepover 地点列出淋浴设施。主动询问包含内容与价格，可以避免误解。'},
   {prompt:'预订之前，哪个问题最有帮助？',options:['“Is this location suitable for my departure area and plans?”\n“这个地点适合我的出发区域与行程安排吗？”','“My flight details cannot affect which location I choose.”\n“我的航班信息不会影响选择哪个地点。”'],response:'练习回应：“请先查看出发信息，并在预订前确认合适地点。”',explain:'服务只有在位置与使用条件适合行程时才真正有用。练习不提供登机口或时间保证。'}
  ],
  lenses:{
   clarity:{fact:'实拍标识结合文字、登机口字母、箭头与图形。迪拜机场也将标识、地图与工作人员列为转机信息来源。',claim:'清晰的信息可以减少不确定感。',reason:'我们的分析：旅客需要先知道下一步，再选择服务。真实标识证明寻路工具的存在，但不能据此断言所有旅客都能理解。'},
   comfort:{fact:'机场提供付费休息空间与工作空间。照片展示 Sleepover 的一种房型，不代表全部产品。',claim:'好的候机体验，更需要合适的选择。',reason:'我们的分析：休息与工作设施可能帮助部分旅客，但价格、位置和使用条件也影响其价值。小组没有测量舒适度或满意度。'},
   inclusion:{fact:'机场在 T3 B 区提供儿童游乐与家庭座位，并另行介绍无障碍服务与 T2 辅助出行休息室。',claim:'不同的人，需要不同的支持。',reason:'我们的分析：一种设施不能代表所有人的需求。需要比较地点与使用条件，并考虑某位旅客真正需要什么。'}
  },
  priorities:{
   clarity:{title:'让下一步更容易理解。',copy:'供讨论的观点：在需要作出选择的位置提供更清楚的信息，可以帮助不熟悉机场的旅客先确定方向。讨论这些信息应该放在哪里，又最能帮助谁。'},
   comfort:{title:'让等待时间更有价值。',copy:'供讨论的观点：合适的休息或工作空间可以帮助疲惫的旅客。同时考虑价格、位置与使用条件，而不只看设施数量。'},
   inclusion:{title:'让合适的帮助更容易找到。',copy:'供讨论的观点：清楚展示辅助服务，可以帮助旅客表达需求。讨论工作人员的支持与实体空间的无障碍体验。'}
  }
 });
 // Vocabulary retains the English expression alongside its Chinese meaning.
 for(const j of C.journey)for(const [en,zh]of j.words)D.set(en,en+' · '+zh);
 for(const j of Object.values(C.rest))for(const [en,zh]of j.words)D.set(en,en+' · '+zh);
 for(const j of C.dialogue)D.set(j.word[0],j.word[0]+' · '+j.word[1]);
 add(`
DUBAISAT-1 / 26 NOVEMBER 2010|迪拜卫星一号 / 2010 年 11 月 26 日
A satellite view of the airport and its city surroundings. This 2010 archive predates later expansions, so use the official map for present-day navigation.|机场与周边城市的卫星视角。照片拍摄于 2010 年，早于后续扩建，当前导航请使用官方地图。
DUBAI AIRPORTS / TERMINAL 3|迪拜机场 / 3 号航站楼
Move closer to the terminal and its aircraft stands. The airport-wide view and this terminal photograph show different scales and photographic moments.|走近航站楼与停机位。全景照片和航站楼照片来自不同尺度与拍摄时刻。
The terminal identifies itself.|标识告诉你：这里是 T3。
The actual DXB / T3 sign identifies Terminal 3 in this forecourt photograph. It does not identify a passenger’s gate or the location of an airside facility.|照片中的 DXB / T3 标识清楚显示 3 号航站楼。它不是某位旅客登机口或空侧设施的位置指示。
A covered terminal frontage.|有顶棚的航站楼前场。
The repeated arches form the visible terminal frontage. We can describe this photographed structure without guessing which check-in area lies behind it.|连续拱形结构构成航站楼前部。可以据实描述建筑外观，而不推测背后是哪一处值机区域。
Landside, before the transfer space.|从陆侧认识航站楼。
The forecourt road is part of the landside exterior view. It is not the walking route between T3 concourses and should not be used to infer an airside transfer.|前场道路属于陆侧外部空间，不是 T3 候机廊之间的步行路线，不能据此推断空侧转机路径。
TERMINAL 3 / FORECOURT PHOTOGRAPH|3 号航站楼 / 前场实拍
Choose one or more needs to compare relevant examples.|选择一个或多个需求，比较对应示例。
YOUR NEEDS / A CUSTOM COMPARISON|你的需求 / 自由组合比较
What would help this passenger?|什么能帮助这位旅客？
Rest: consider a commercial Sleepover option at the appropriate concourse.|休息：考虑位于合适候机廊的 Sleepover 付费休息产品。
Work: the official Sleepover listing includes a workspace; check the commercial product and suitability.|工作：Sleepover 官方介绍中包含工作空间，需确认产品内容与适用性。
A meal: Food Village is the named example at T3 C Gates.|用餐：本报告的示例为 T3 C 区的 Food Village。
Family: the Family Zone example is at T3 B Gates.|家庭活动：本报告的家庭活动区示例位于 T3 B 区。
Accessibility: the pictured Assisted Travel Lounge is at T2. Ask the airline about support for the real connection.|辅助服务：照片中的辅助出行休息室位于 T2，请向航空公司确认实际转机所需支持。
Choose one or more needs to compare the examples. Return to a traveller tab for the original group-designed scenario.|选择需求以比较示例。点击旅客标签可恢复小组设计的原始情境。
The other selected examples are linked below. Comparing them does not place them in the same area or create a route.|其他已选示例列在下方，它们不一定处于同一区域，也不构成连续路线。
The large name sign|上方的大型名称标识
A dining counter area|餐饮柜台区域
The shared seating area|公共座位区域
A USEFUL CLUE|找到了有用线索
Food Village — a dining space.|Food Village —— 餐饮空间。
The real name sign identifies an area for food. “DXB” is the airport code. It does not mean that every item is free or that any photographed menu is current.|名称标识指出这是一处餐饮区，“DXB” 是机场代码。它不代表食品免费，照片中的菜单也不一定是当前菜单。
LOOK AGAIN|再观察一下
Look for the name of the whole dining area.|请寻找整个餐饮区域的名称。
You selected a real part of the scene. The question asks for the sign that names the overall food space. Try the large coloured lettering above the counters.|你选中了真实空间的一部分。问题询问的是餐饮区名称，试着观察柜台上方醒目的彩色大字。
HINT|提示
Look above the food counters.|看看餐饮柜台上方。
Find the largest colourful lettering that names the whole area.|寻找标明整个区域名称的彩色大字。
A useful choice.|这个问法很有帮助。
Try a more useful question.|试试更有帮助的问法。
Return to the first situation ↺|回到第一个情境 ↺
YOUR LOCAL CHOICE / A DRAFT ARGUMENT FOR REVIEW|当前选择 / 供讨论的观点
COMFORT / TIME TO RECHARGE|空间舒适 / 为旅途充电
INCLUSION / A PLACE FOR SUPPORT|服务包容 / 获得合适支持
⤢ Explore photograph|⤢ 探索实拍照片
Source page ↗|来源页面 ↗
Original photograph ↗|原始照片 ↗
Resized/compressed or conventionally cropped for display. No generated image content or scene extension.|仅进行显示所需的缩放、压缩或常规裁切，没有生成式扩图或添加场景内容。
Model detail and attribution ↗|模型详情与署名 ↗
GPL 2 licence ↗|GPL 2 许可 ↗
Corresponding model source archive ↓|下载对应模型源文件 ↓
Airbus A380-800 / Trent 900 community exterior model from A380-omega. This version uses the original author’s unmodified white “Blank Paint” texture, with its windows, doors and panel detail. It is an unpainted digital model, not an Airbus branded factory-livery reconstruction or a specific airline registration.|A380-800 / Trent 900 外观模型来自 A380-omega 社区项目。保留作者原始白色无涂装纹理、舷窗、舱门与面板细节，不代表特定航空公司或注册号。
Original contributors: Muraleedharan, Tapaninen, Toryx, Hamilton, Dalvi, Cunningham and Ampere. Source geometry, UVs and texture content were retained in conversion. The extended gear-door pose follows the original model XML. Phong-to-PBR material mapping is approximate. This is a visual study, not engineering data.|原作者包括 Muraleedharan、Tapaninen、Toryx、Hamilton、Dalvi、Cunningham 与 Ampere。转换时保留几何、UV 与纹理，起落架舱门姿态参照原始 XML。材质转换为视觉近似，不构成工程数据。
The cabin experience opens the exterior model and transitions into credited Emirates cabin photography. The small two-deck navigator indicates approximate class zones; it is not a booking seat map. The 2020 four-class example and 2023 First Class photograph are individually dated. The exterior is an unpainted community model, composited with real DXB photography and a shadow receiver.|客舱体验通过打开机身，过渡到已署名的阿联酋航空实拍。双层导航只说明大致舱位分区，不能用于订票选座。2020 年四舱配置与 2023 年头等舱照片分别注明日期。无涂装外观模型与真实 DXB 摄影及阴影层组合展示。
October 2024 campaign. Real-location filming with a staged story. Excerpts are muted, trimmed and compressed at original speed; photographs are animated only through framing and transitions. Film remains copyright Dubai Airports. Local educational preview; public reuse permission is not established.|2024 年 10 月宣传影片，采用真实场地拍摄的情节演绎。片段经过静音、截取与压缩，保留原速。照片仅通过运镜与转场呈现动态。影片版权归迪拜机场，本版用于本地教学预览，尚未确认公开再使用许可。
oneDXB film / Dubai Airports ↗|oneDXB 影片 / 迪拜机场 ↗
Dubai International Airport|迪拜国际机场
Transfers and concourse connections|转机与候机廊连接
Official DXB Express Maps|DXB 官方交互地图
Sleepover at DXB|DXB 的 Sleepover 服务
Sleepover T3 B / operator information|Sleepover T3 B 区 / 运营方信息
Food Village|Food Village 餐饮区
DXB Family Zone|DXB 家庭活动区
Baby care rooms|育婴室
Assisted Travel Lounge|辅助出行休息室
Special assistance|特殊辅助服务
Official Emirates A380 fleet information|阿联酋航空 A380 官方机队资料
Emirates four-class A380 example|阿联酋航空 A380 四舱配置示例
oneDXB — official airport film|oneDXB —— 机场官方影片
95.2 million guests is the 2025 annual figure.|9520 万人次为 2025 年全年旅客量。
Three terminals; T3 contains A/B/C. B–C walking and the train to A. Confirm the real connection with the airline.|三个航站楼；T3 包含 A/B/C 区，B—C 可步行，A 区乘列车。实际转机方式请向航空公司确认。
The official interactive map. Its content and availability are controlled by Dubai Airports.|官方交互地图，其内容与可用性由迪拜机场维护。
Commercial sleep options, workspaces and selected-location showers; T3 A/B/C and T1 D.|付费休息、工作空间及部分地点的淋浴服务，分布于 T3 A/B/C 与 T1 D 区。
The location of the reception photograph and the operator’s product information.|接待处实拍位置与运营方产品信息。
A dining example at T3 C Gates departures.|T3 C 区出发区域的餐饮示例。
Children’s play and family benches at T3 B Gates departures.|T3 B 区出发区域的儿童游乐与家庭座位。
T3 departures; ask staff for the closest room. A room interior is not pictured here.|T3 出发区域，可向工作人员询问最近地点。本报告未展示育婴室内部。
T2 departures, not on an assumed T3 route.|位于 T2 出发区域，不属于默认的 T3 路线。
Contact the airline for additional assistance and ask airport staff for support.|特殊辅助需求请联系航空公司，也可向机场工作人员寻求帮助。
Manufacturer-type context and published dimensions. The third-party model is separately credited.|机型背景与公开尺寸，第三方模型另行署名。
December 2020: 14 First, 76 Business, 56 Premium Economy and 338 Economy seats; not a universal A380 layout.|2020 年 12 月配置：头等舱 14 席、商务舱 76 席、豪华经济舱 56 席、经济舱 338 席。并非所有 A380 都采用此布局。
Dubai Airports, October 2024. A staged campaign filmed in the real airport. Muted excerpts are used at original speed.|迪拜机场，2024 年 10 月。在真实机场拍摄的情节式宣传片，使用原速静音片段。
dining|dining · 餐饮
sign|sign · 标识
`);
 // Photo titles and places also appear in credits, captions and the inspection dialog.
 const mediaNames={hero:'DXB 航站楼',panorama:'3 号航站楼俯瞰',architecture:'3 号航站楼前场',journeyInfo:'T3 B 候机廊',journeyGate:'A 区方向标识',journeyWait:'候机空间',journeyBoard:'登机口',terminal1:'1 号航站楼值机大厅',terminal2:'2 号航站楼',concourseA:'A 候机廊',concourseB:'B 候机廊',concourseC:'C 候机廊',gateInside:'登机口候机区',apron:'A380 机坪实拍',sleepover:'Sleepover 接待处',sleepoverCabin:'Sleepover 休息舱',restCabin:'Sleepover 休息舱',food:'Food Village 餐饮区',family:'DXB 家庭活动区',support:'辅助出行休息室',wayfinding:'A 候机廊实拍标识',airside:'DXB 机坪与候机廊',wholeAirport:'迪拜国际机场全景',satellite:'迪拜卫星一号机场影像',cabinFirst:'A380 头等舱套间',cabinPremium:'豪华经济舱实拍',cabinEconomy:'经济舱实拍',cabinBusinessWide:'A380 商务舱整体布局实拍',cabinBusiness:'商务舱实拍',cabinStairs:'A380 前部楼梯',cabinLounge:'A380 机上休闲区'};
 const places={wholeAirport:'机场全景航拍，2013 年档案',satellite:'卫星影像，2010 年档案',architecture:'3 号航站楼前场',panorama:'3 号航站楼俯瞰',gateInside:'3 号航站楼 B 区登机口',apron:'A 候机廊旁的 A380',food:'3 号航站楼 C 区出发区域',family:'3 号航站楼 B 区出发区域',support:'2 号航站楼出发区域',wayfinding:'3 号航站楼 A 候机廊方向标识',sleepover:'DXB 3 号航站楼 B 区接待处',sleepoverCabin:'DXB 3 号航站楼 B 区的一种休息房型',restCabin:'DXB 3 号航站楼 B 区的一种休息房型',airside:'迪拜国际机场空侧机坪',cabinFirst:'阿联酋航空 A380 头等舱，2023 年翻新发布',cabinPremium:'阿联酋航空 A380 客舱实拍，2020 年发布',cabinEconomy:'阿联酋航空 A380 客舱实拍，2020 年发布',cabinBusiness:'阿联酋航空 A380 客舱实拍，2020 年发布',cabinStairs:'阿联酋航空 A380 客舱实拍，2020 年发布',cabinLounge:'阿联酋航空 A380 客舱实拍，2020 年发布'};
 for(const [key,m]of Object.entries(window.DXB_MEDIA)){const title=mediaNames[key]||m.title,place=places[key]||title;D.set(m.title,title);D.set(m.place,place);D.set(m.alt,place+'，真实照片');D.set(m.title+' · '+m.credit+' ↗',title+' · '+m.credit+' ↗');D.set(m.title+' · '+m.credit,title+' · '+m.credit);D.set(m.place+' — source, dimensions and use notes',place+' — 来源、尺寸与使用说明');D.set(m.place+' · independent real photograph, not a map highlight.',place+' · 独立实拍照片，不是地图高亮区域。');D.set(m.place+'. Photographer: '+m.author+'.',place+'。摄影署名：'+m.author+'。');D.set('Displayed asset: '+m.size.join(' × ')+' px. Original: '+m.originalSize.join(' × ')+' px. Source record: '+m.recordDate+'. Capture date: '+m.captureDate+'. Checked '+m.checked+'.','展示尺寸：'+m.size.join(' × ')+' 像素；原图：'+m.originalSize.join(' × ')+' 像素。来源日期：'+m.recordDate+'；拍摄日期：'+m.captureDate+'。核对：'+m.checked+'。');}
 // Composed messages are translated as complete strings, so interaction updates stay in Chinese.
 for(const item of Object.values(C.gate))D.set(item.copy+' Two viewpoints, photographed at different moments.',D.get(item.copy)+' 两张照片来自不同拍摄时刻。');
 const needLabels={rest:'休息','a meal':'用餐',work:'工作',family:'家庭活动',accessibility:'无障碍与辅助服务'};
 const rules=window.DXB_LOCALE_RULES;
 rules.push([/^Selected priorities: (.+)\.$/,m=>'已选需求：'+m[1].split(' + ').map(x=>needLabels[x]||x).join(' + ')+'。']);
 rules.push([/^(.+\.)( The other selected examples are linked below\. Comparing them does not place them in the same area or create a route\.)$/,m=>(D.get(m[1])||m[1])+' '+D.get(m[2].trim())]);
 add(`
Between Flights home|航班之间首页
Five report chapters|五个报告章节
Choose any of the fifteen scenes|从十五个场景中自由选择
Aircraft experience|飞机探索模式
Interactive A380 digital model|可交互 A380 模型
Aircraft parts|飞机部件
Aircraft view controls|飞机视角控制
Rotate aircraft left|向左旋转飞机
Rotate aircraft right|向右旋转飞机
Raise aircraft viewpoint|升高观察视角
Lower aircraft viewpoint|降低观察视角
Zoom in on aircraft|放大飞机
Zoom out from aircraft|缩小飞机
Cabin deck view|客舱层级
Real A380 cabin photographs|A380 真实客舱照片
Airport photography scales|机场照片尺度
Transfer themes|转机环节
Compare airport terminals|比较航站楼
T3 concourse photographic views|T3 候机廊实拍
Gate observation views|登机口观察视角
Inspect the Sleepover sign|查看 Sleepover 标识
Inspect the reception counter|查看接待柜台
Inspect the cabin doorway|查看休息舱入口
Observe parts of Food Village|观察 Food Village 不同区域
Family and support facilities|家庭与辅助设施
Traveller scenarios|旅客情境
Evaluation lenses|评价角度
Choose an improvement priority|选择优先改善方向
Choose another scene|选择其他场景
Return to the overview|返回机场概览
Close scene index|关闭场景目录
Close photo inspection|关闭照片查看
Zoom out of photograph|缩小照片
Zoom in on photograph|放大照片
Close sources|关闭来源说明
Enlarge the airport architecture photograph|放大机场建筑照片
`);
window.DXB_LOCALE_ADD(`
3D unavailable · explore the real photographs below|三维暂不可用 · 可浏览下方真实客舱照片
A380 / THREE-DIMENSIONAL INTERIOR|A380 / 三维客舱探索
Two decks. One aircraft.|一架飞机，两层客舱。
484 modelled seats · select a space to enter|484 个三维座位 · 选择区域进入
↗ Deck overview|↗ 双层总览
Real photo ↗|实拍对照 ↗
⤢ Full screen|⤢ 全屏探索
↙ Exit full screen|↙ 退出全屏
← Apron|← 返回机坪
Enter the 3D cabin →|进入三维客舱 →
Reconstructed from published layouts and photographs · approximate dimensions|依据公开布局与照片重建 · 尺寸为近似值
Drag to rotate · select a cabin to go inside|拖动旋转 · 选择舱区进入内部
Drag to look · W A S D to walk · Esc for overview|拖动环视 · W A S D 移动 · Esc 返回总览
Inside 3D · drag to look · W A S D to move|三维舱内 · 拖动环视 · W A S D 移动
Fuselage cutaway · choose a cabin to enter|机身展开总览 · 选择区域进入客舱
Walk through the cabin|在客舱内漫游
Walk forward|向前行走
Walk backwards|向后行走
Step left|向左平移
Step right|向右平移
Look left|向左看
Look right|向右看
56 seats · 2–4–2|56 个座位 · 2–4–2 布局
338 seats · 3–4–3|338 个座位 · 3–4–3 布局
14 suites · upper deck|14 间套间 · 上层客舱
76 seats · staggered 1–2–1|76 个座位 · 交错式 1–2–1 布局
Upper deck · rear lounge|上层客舱 · 后部休息区
Forward stairway · two passenger decks|前部楼梯 · 连接两层乘客客舱
Open the fuselage, see both passenger decks, then enter the three-dimensional cabin and explore at your own pace.|打开机身，观察双层布局，再进入三维客舱，自由探索其中的空间。
The three-dimensional reconstruction follows the seat counts and class arrangements of Emirates’ December 2020 four-class example. Details and dimensions are approximate. Use the real photographs below to compare the model with the aircraft interior.|三维重建依据阿联酋航空 2020 年 12 月公布的四舱等座位数量与排列方式，细节和尺寸为近似值。可使用下方真实照片对照观察模型与实际客舱。
3D A380 cabin. Drag to look, W A S D to move, arrow keys to look, Escape for deck overview.|A380 三维客舱。拖动环视，W A S D 移动，方向键调整视线，Esc 返回双层总览。
V5 uses an actual three-dimensional, freely navigable reconstruction: 14 First Class suites, 76 Business, 56 Premium Economy and 338 Economy seats. Counts and class arrangements follow the December 2020 Emirates announcement. Geometry, finishes, row spacing, equipment and zone boundaries are approximate interpretations of published photographs, not an airline CAD model or a booking seat map. The exterior remains the credited unpainted A380-800 model. Photographs stay separately labelled for comparison.|V5 使用可自由漫游的三维重建：14 间头等舱套间、76 个商务舱座位、56 个豪华经济舱座位及 338 个经济舱座位。数量和排列依据阿联酋航空 2020 年 12 月公告。形体、饰面、排距、设备及区域边界依据公开照片近似重建，并非航空公司的 CAD 模型或订票座位图。外观沿用已注明来源的无涂装 A380-800 模型，真实照片单独标示，供对照观察。
`);
})();
