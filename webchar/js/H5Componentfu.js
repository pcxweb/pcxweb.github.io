
//QS排行
var rank = `
	<div class="rank con_com">
			<strong>2018 QS排名</strong>
			<div><p><span>综合排名：</span><strong style="text-align: center;">551-600</strong></p></div>
			<ul class="clearfix">
				<li><span>护理</span> <strong>51-100</strong></li>
				<li><span>英语语言文学</span> <strong>151-200</strong></li>
				<li><span>心理学</span> <strong>151-200</strong></li>
				<li><span>教育培训</span> <strong>151-200</strong></li>
				<li><span>医学</span> <strong>201-250</strong></li>
				<li><span>社会学</span> <strong>201-250</strong></li>
				<li><span>农林学</span> <strong>251-300</strong></li>
				<li><span>环境科学</span> <strong>251-300</strong></li>
				<li><span>法学</span> <strong>251-300</strong></li>
				<li><span>生物学</span> <strong>251-300</strong></li>
		</div>

`
// 学校特色
var teselist = `
		<div class="teselist">泰晤士报2017年全球年轻大学排名，名列世界32位</div>
		<div class="teselist">弗林德斯大学会计专业，商科管理专业毕业生在南澳地区毕业生中起薪最高，会计专业起薪为A$50,000; 商科管理专业起薪为A$50,278</div>
		<div class="teselist">社工专业 AASW认证课程，带1000小时实习</div>
		`

var teselist2 =  `
		<div class="teselist">所有本科和硕士工程专业都受 EA 认证的大学，全澳洲仅有的在工程本科课程中安排 20 周实习的大学</div>
		<div class="teselist">全澳最早开设护理高等教育的大学之一，全澳最大的护理学院之一，全澳第一个在大学校园内设立附属医院的大学，提供至少500小时的实习安排</div>
		
`
// <div  class="teselist"></div>
//入学要求

var yaoqiu1 =`
		<div class="special con_com">
			<ul>
				<li>本科预科
					<ul>
						<li>延伸预科：完成高二，均分60%，雅思5.0（单项5.0）</li>
						<li>标准预科：完成高二，均分65%，雅思5.5（单项5.5）</li>
					</ul>
				</li>
			</ul>
			<ul>
				<li>国际大一
					<ul>
						<li>完成高三，均分70%</li>
						<li>雅思6.0（单项5.5）</li>
					</ul>
				</li>
			</ul>
		</div>

`
//硕士预科
var yaoqiu2 =`
		<div class="special con_com">
			<ul>
				<li>硕士预科(商科)
					<ul>
						<li>完成受认可的3年制学位或等同于澳大利亚学历资格框架AQF大专课程</li>
						<li>强化课程（1学期）：雅思6.0（各单项不低于5.5），每个学期时长14周</li>
						<li>标准课程（2学期）：雅思5.5（各单项不低于5.0）</li>
					</ul>
				</li>
			</ul>
		</div>

`
//转升硕PMP
var yaoqiu3 =`
		<div class="special con_com">
			<ul>
				<li>转升硕PMP
					<ul>
						<li>可接受内测配语言，不一定要雅思,课程包括：
							<ul>
								<li>Master of Business 商业硕士</li>
								<li>Master of Accounting 会计硕士</li>
								<li>Master of Accounting and Finance.会计和金融硕士</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>

`
//本科
var yaoqiu4 = `
	<div class="special con_com">
			<ul>
				<li>本科
					<ul>
						<li>高中毕业，高考分数达到入读专业的录取标准（各省份不一致，具体以官网为准）</li>
						<li>雅思6.0，口语/写作6.0；或托福iBT 72，口语/写作 18；或托福PBT 550，TWE 4.5（针对大部分本科专业） </li>
						<li>雅思6.5，口语/写作6.5，听力/阅读6.0；或托福iBT 80，单项不低于22；或托福 PBT 580，TWE 4.5（针对专业：Law and Legal Practice、Law and Legal Practice (Honours)、Speech Pathology）</li>
					</ul>
				</li>
				
			</ul>
		</div>

`
//本科
var yaoqiu5 = `
	<div class="special con_com">
			<ul>
				<li>本科
					<ul>
						<li>雅思6.5，单项不低于6.0；或托福 iBT 80，单项不低于18；或托福 PBT 580，TWE 4.5（针对专业：Arts-High Achievers Program、Midwifery、Nursing (Pre-Registration and Graduate Entry)、Nutrition and Dietetics、Exercise Science、Psychology (Honours)、Psychological Studies (Graduate Entry)、Psychological Studies</li>
					</ul>
				</li>
				
			</ul>
		</div>

`
//本科 硕士
var yaoqiu6 = `
	<div class="special con_com">
			<ul>
				<li>本科
					<ul>
						<li>雅思7.0，单项不低于7.0；或托福iBT 96，单项不低于24；或托福 PBT 600，TWE 5.0（针对专业：Education Medicine）</li>
					</ul>
				</li>
			</ul>
			<ul>
				<li>硕士
					<ul>
						<li>完成相当于澳洲3 年本科学士学位同等水平的文凭课程</li>
						<li>有些学位可能需要工作经验才能满足入学要求，需要雇主提供推荐信或说明</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu7 = `
	<div class="special con_com">
			<ul>
				<li>硕士
					<ul>
						<li>雅思6.0，口语/写作6.0；或托福iBT 72，口语/写作18；或托福PBT 550，TWE 4.5（针对大部分专业）</li>
						<li>雅思7.0，单项不低于6.5；或托福iBT 94，单项不低于22；或托福PBT 600，TWE 4.5（针对专业：Speech Pathology、Physiotherapy 、Nutrition and Dietetics 、Occupational Therapy）</li>
						
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu8 = `
	<div class="special con_com">
			<ul>
				<li>硕士
					<ul>
						<li>雅思6.5，单项不低于6.0；或托福iBT 80，单项不低于18；或托福PBT 580，TWE 4.5（针对专业：Accounting、Arts – TESOL、Audiology、Business Administration、Business、Midwifery、Nursing、Social Work 、Teaching English as a Second Language (TESOL) 、Laws (International Law and International Relations)</li>
					</ul>
				</li>
			</ul>
			
		</div>

`
var yaoqiu9 = `
	<div class="special con_com">
			<ul>
				<li>硕士
					<ul>
						<li>雅思7.0，单项不低于7.0；或托福iBT 96，单项不低于24；或托福PBT 600，TWE 5.0（针对专业：Medicine、Cognitive Behaviour Therapy、Juris Doctor）</li>
						<li>雅思7.5，单项不低于7.5；或托福iBT 108，单项不低于27；或托福PBT 630，TWE 5.5（针对专业：Teaching）</li>
						<li>雅思7.0，单项不低于7.0；或托福iBT 94，口语23，写作27，听力/阅读24（针对专业：Psychology (Clinical)</li>
					</ul>
				</li>
			</ul>
		</div>

`

