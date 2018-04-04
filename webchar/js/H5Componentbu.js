
//QS排行
var rank = `
	<div class="rank con_com">
			<strong>2018 QS排名</strong>
			<div><p><span>综合排名：</span><strong style="text-align: center;">431-440</strong></p></div>
			<ul class="clearfix">
				<li><span>医学</span> <strong>351-400</strong></li>

		</div>

`
// 学校特色
var teselist = `
		<div class="teselist">法律专业全澳第一，课程经澳大利亚司法部认证，毕业后经过15周在校职业培训（PLT）和15周实习，可成为澳大利亚的执业出庭律师，并可在其他英联邦国家和地区执业（加拿大、英国、香港、新加坡、马来西亚等）</div>
		<div class="teselist">精算专业由特伦斯·奥尼尔教授开发并讲授，奥尼尔教授是澳大利亚精算行业的领军人物，学生将有机会与奥尼尔教授在精算研究中心共事</div>
		<div class="teselist">房地产学院是与澳洲上市房地产开发、酒店和金融管理龙头企业Mirvac合办，学生有机会接触最新业界信息</div>
`		
var teselist2 = `
		<div class="teselist">工程造价专业获澳洲工料测量师协会（AIQS）认证和英国皇家测量师协会（RICS）认证</div>
		<div class="teselist">房产评估专业获得了澳洲房产评估协会的认证（Australia Prop erty Ins titute），毕业生将得到Certificate Practicing Valuer的资格认证，此外硕士专业学生还将获得英国皇家测量师协会（RICS）的认证，拥有该从业资格的学生将是房地产评估行业的专业人士</div>
		
`	
// <div  class="teselist"></div>
//入学要求
//本科预科
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
//硕士预科（商科）
var yaoqiu2 = `
	<div class="special con_com">
			<ul>
				<li>硕士预科（商科）
					<ul>
						<li>完成受认可的3年制学位或等同于澳大利亚学历资格框架AQF大专课程</li>
						<li>强化课程（1学期）：雅思6.0（各单项不低于5.5），每个学期时长14周</li>
						<li>标准课程（2学期）：雅思5.5（各单项不低于5.0）</li>
					</ul>
				</li>
			</ul>
			<ul>
				<li>转升硕PMP
					<ul>
						<li>可接受内测配语言，不一定要雅思，课程包括：Master of Business 商业硕士  Master of Accounting 会计硕士  Master of Accounting and Finance.会计和金融硕士</li>
					</ul>
				</li>
			</ul>
		</div>

`

var yaoqiu3 =`
		<div class="special con_com">
			<ul>
				<li>本科
					<ul>
						<li>高中毕业，高考分数达到入读专业的录取标准（各省份不一致，具体以官网为准）</li>
						<li>雅思6.5，单项不低于6.0；或托福 iBT 80，单项不低于18；或托福 PBT 580，TWE 4.5（针对专业：Arts-High Achievers Program、Midwifery、Nursing (Pre-Registration and Graduate Entry)、Nutrition and Dietetics、Exercise Science、Psychology (Honours)、Psychological Studies (Graduate Entry)、Psychological Studies</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu4 =`
		<div class="special con_com">
			<ul>
				<li>本科
					<ul>
						<li>雅思6.0，口语/写作6.0；或托福iBT 72，口语/写作 18；或托福PBT 550，TWE 4.5（针对大部分本科专业）</li>
						<li>雅思6.5，口语/写作6.5，听力/阅读6.0；或托福iBT 80，单项不低于22；或托福 PBT 580，TWE 4.5（针对专业：Law and Legal Practice、Law and Legal Practice (Honours)、Speech Pathology）</li>
						<li>雅思7.0，单项不低于7.0；或托福iBT 96，单项不低于24；或托福 PBT 600，TWE 5.0（针对专业：Education Medicine ）</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu5 =`
		<div class="special con_com">
			<ul>
				<li>硕士
					<ul>
						<li>完成相当于澳洲3 年本科学士学位同等水平的文凭课程</li>
						<li>有些学位可能需要工作经验才能满足入学要求，需要雇主提供推荐信或说明</li>
						<li>雅思6.0，口语/写作6.0；或托福iBT 72，口语/写作18；或托福PBT 550，TWE 4.5（针对大部分专业）</li>
						<li>雅思7.0，单项不低于7.0；或托福iBT 96，单项不低于24；或托福PBT 600，TWE 5.0（针对专业：Medicine、Cognitive Behaviour Therapy、Juris Doctor）</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu6 =`
		<div class="special con_com">
			<ul>
				<li>硕士
					<ul>
						<li>雅思7.0，单项不低于6.5；或托福iBT 94，单项不低于22；或托福PBT 600，TWE 4.5（针对专业：Speech Pathology、Physiotherapy 、Nutrition and Dietetics 、Occupational Therapy）</li>
						<li>雅思7.0，单项不低于7.0；或托福iBT 94，口语23，写作27，听力/阅读24（针对专业：Psychology (Clinical)</li>
						<li>雅思7.5，单项不低于7.5；或托福iBT 108，单项不低于27；或托福PBT 630，TWE 5.5（针对专业：Teaching）</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu7 =`
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