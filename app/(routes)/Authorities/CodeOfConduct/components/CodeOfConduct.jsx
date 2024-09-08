import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { CommitteeMembers, DisciplineCommittee, EthicalStandards, PolicyOnCodeOfEthics, StudentsAttributes } from '@/data/(routes)/Authorities/CodeOfConduct'
import React from 'react'

function CodeOfConduct() {
    return (
        <div className="flex flex-col w-11/12 min-h-screen gap-20 lg:w-3/4">

            {/* Policy On Code Of Ethics */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Policy On Code Of Ethics</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-6">
                    <h1>Dwaraka Doss Vaishnav College is committed to moral and lawful behavior in all college level activities. Every member of the college is expected to abide by the applicable laws, rules, regulations, and policies. The college has an Ethics policy to maintain and nurture an inclusive campus. It is an institution committed to fairness, honesty, professional integrity, respect, trust, and benevolence among its employees and the student fraternity.</h1>
                    {PolicyOnCodeOfEthics.map((data, index) => (
                        <ul key={index} className="flex flex-col gap-2 list-disc list-inside">
                            <h1 className="font-semibold">{data.title}</h1>
                            <li className="pl-6">{data.desc}</li>
                        </ul>
                    ))}
                </div>
            </div>

            {/* Code Of The Ethical Conduct Policy Document */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Code Of The Ethical Conduct Policy Document</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-10">
                    <h1>As an institution devoted to maintaining a liable atmosphere for learning and the highest level of academic performance, through its motto “May we mediate upon the Supreme Truth”, Dwaraka Doss Goverdhan Doss Vaishnav College is committed to excellence and integrity in all its endeavours. In this way, the institution aims to maintain the trust and assurance of both the College community and the public.</h1>
                    <h1>The administrators, employees and students are expected to undertake their responsibilities on the College’s behalf with conscientiousness and professionalism and to abide by the highest standards of honesty, integrity, and equity. This includes, but is not constricted to, being regardful of the rights of others and candid in all dealings, with members of the College community as well as third parties; protecting the secrecy of confidential information; and conformity with all applicable laws, rules and regulations. College representatives should not place their personal interests above the best interests of the College; even the occurrence of impropriety must be averted.</h1>

                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">1. Scope</h1>
                        <p className="pl-6">This Code of Ethical Conduct applies to all administrators, employees and students of Dwaraka Doss Goverdhan Doss Vaishnav College. It is not intended to supersede and may be supplemented by, specific College policies that have been adopted in the past and that may also be adopted in the future. This Code may be revised or supplemented from time to time by the different administrative bodies of the College.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">2. Purpose</h1>
                        <p className="pl-6">The College has forever upheld and will continue to uphold the advanced and highest levels of ethics, fairness and integrity in all its matters. To this end, this Code of Ethical Conduct serves to:</p>
                        <ul className="pl-12 space-y-6 list-disc list-inside">
                            <li>Accentuate the College’s Earnestness to ethical conduct and compliance with the jurisprudence/ law.</li>
                            <li>Set forth elementary standards of honorable conduct.</li>
                            <li>Render reporting mechanisms for best-known or suspected ethical or legal violations; and</li>
                            <li>Help forestall and discover wrong doing.</li>
                            <li>Strengthen loyalty, ensure transparency and social responsibility of the college’s activities</li>
                            <li>Build and maintain the highest ethical standards among the members of the staff and student fraternity</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">3. Background</h1>
                        <p className="pl-6">The Code of Conduct of the college is non-arbitrary as a set of written guidelines, which details the acknowledged honourable and moral norms and values and professional standards of conduct to which all members of the profession must adhere to.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">4. Administration of the Code of Conduct and Professional Ethics</h1>
                        <ul className="pl-6 space-y-6 list-disc list-inside">
                            <li>The code of conduct and professional ethics is to be declared in the form of independent handbooks for students, teachers, administrators and other Staff.</li>
                            <li>The Code of ethics should be displayed on the college website.</li>
                            <li>The Vision and Mission of the College is to be displayed in all the class rooms and other common learning facilities like the laboratories, library etc.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">5. Code of Conduct and Discipline Committee</h1>
                        <p className="pl-6">The members of the Committee comprise of:</p>
                        <div className="grid items-center grid-cols-2 gap-2 pl-6 md:grid-cols-2 xl:grid-cols-3 w-fit">
                            {DisciplineCommittee.map((data, index) => (
                                <div key={index} className="flex flex-col w-full p-3 border-2 rounded-md bg-gradient-to-tr from-green-100 to-yellow-100">
                                    <h1>{data.title}</h1>
                                    <p>{data.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="pl-6">Members</p>
                        <div className="grid items-center grid-cols-2 gap-2 pl-6 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-fit">
                            {CommitteeMembers.map((data, index) => (
                                <div key={index} className="flex flex-col w-full p-3 border-2 rounded-md bg-gradient-to-tr from-green-100 to-yellow-100">
                                    <h1>{data.title}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">6. Responsibilities of the Code of Conduct and Professional Ethics Committee</h1>
                        <ul className="pl-6 space-y-6 list-disc list-inside">
                            <li>Identifying the code of Conduct for the following stakeholders</li>
                            <ul className="pl-6 space-y-6 list-disc list-inside">
                                <li>Students</li>
                                <li>Teachers</li>
                                <li>Administrators</li>
                                <li>Other Staff</li>
                            </ul>
                            <li>Consolidation and integration of the code of Conduct for the respective stakeholders on campus in the form of devoted Handbooks.</li>
                            <li>Reviewing the Codes at regular intervals and reprinting the Handbooks whenever necessary.</li>
                            <li>Supervise strict adherence to the Code of Conduct by the periodic announcement to the stakeholders in the form of notices, circulars etc.</li>
                            <li>Assist the Disciplinary Committee in undertaking befitting disciplinary actions in instances of the transgression of the specified code of Conduct.</li>
                            <li>Plan and organize in coordination with the IQAC professional ethics programmes for students, teachers, administrators and other staff.</li>
                            <li>Examine the execution of the Induction week for students, Inviting of Alumni for student interaction programmes, Departmental grooming sessions, Placement Orientations and conduction of placement cell Interviews.</li>
                            <li>Examine and monitor the Yearly Strategic Planning Exercise and Induction Programme for the New Faculty Members and other staff.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Code of Conduct for Principal */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Code of Conduct for Principal</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-10">
                    <ul className="pl-6 space-y-6 list-disc list-inside">
                        <li>The Principal must assure that the development plans of the College, both long-term and short-term, with regard to the academic programmes are duly prepared and enforced through relevant authorities, bodies, committees and its members.</li>
                        <li>It is the duty of the principal to ensure that observance of the acts, statutes, ordinances, regulations, conception and other orders issued there under by the University authorities, other regulatory bodies and the Management, from time to time.</li>
                        <li>The Principal has to ensure the ability and effectualness in the whole of administrative plans and assignments. Administration of the pedantic programmes of the College as well the generic administration of the College has to be under the scope of the Principal.</li>
                        <li>As the head of the institution, the Principal has the obligation of addressing and partitioning all issues solicitous with the partakers of education.</li>
                        <li>The Principal has the duty to assure that generous importance is acknowledged to the gender sensitivity measures in all the activities of the College.</li>
                        <li>With regard to the disciplinary measures, the Principal has the authorization to take all the essential actions as per the direction of the regulatory authority. In this regard he/she should take actions, which should be impartial and he/she should maintain absolute clarity and transparency.</li>
                        <li>The Principal has the province to deliver leadership, direction and co-ordination inside the College.</li>
                        <li>Principal has the obligation for the uncreased conduct of curricular, co-curricular and extra-curricular activities of the College.</li>
                    </ul>
                </div>
            </div>

            {/* Duties & Responsibilities Of Heads Of Departments */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Duties & Responsibilities Of Heads Of Departments</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-10">
                    <ul className="pl-6 space-y-6 list-disc list-inside">
                        <li>They should come in time and oversee the Lecturers in their Departments to insure that they come on time, take classes on time and do their duties seemly.</li>
                        <li>The books prescribed by the University for each year should be procured through the Library and made available in the Department.</li>
                        <li>Each year and each Semester, bearing in mind the general needs of the college the lesson plan for the Department should be ascertained and given to the Lecturers beforehand. This should be handed over to the Principal two days before the reopening of the College.</li>
                        <li>Keeping in mind the lessons to be taken and those that have been taken the examinations should be conducted and the students’ progress reports in the prescribed form should be ready and, with the signature of the HOD, should be sent to the parents through the Principal. When they are returned by the parents they should be kept in the files of the departments.</li>
                        <li>It is very necessary to make sure every day, in the morning and in the evening that the Lecturers and students have done their duties. If for any unforeseen reason the HOD is not able to be present, he/she should ask the senior-most person in the department, in writing, to do this supervision.</li>
                        <li>After the results of the University Exams are published, the Heads of Departments should examine the results of their Departments and discuss with the other Lecturers in the Department of frequent meetings how to better the progress of the students and take follow-up action.</li>
                        <li>The HOD should hold and maintain the movements register of the Lecturers.</li>
                    </ul>
                </div>
            </div>

            {/* Code of Conduct For Teacher & Other Persons Employed In A College */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Code of Conduct For Teacher & Other Persons Employed In A College</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                    <p className="font-medium">[See sub-rule (I) of rule 12 of the Tamil Nadu Private Colleges (Regulation) Rules,1976]</p>
                </div>

                <div className="flex flex-col gap-10">
                    <ul className="pl-6 space-y-6 list-disc list-inside">
                        <li>(1) Every teacher or other person employed in a college shall discharge his duties efficiently and diligently and shall conform to the rules and regulations.</li>
                        <li>(1-A) It shall be the duty of a teacher or other person employed in a private college to do any work in connection with an examination conducted by the University or any college, which he is required to do by the Vice-Chancellor or the Registrar of the University / by the Principal of the College, as the case may be.</li>
                        <li>(2) No teacher or other person employed in a college shall absent himself from his duties without prior permission, In case of sickness or absence on medical grounds, a medical certificate to the satisfaction of the college authorities shall be produced within a week.</li>
                        <li>(3) No teacher or other person employed in a college shall engross directly or indirectly in any trade or business. In the case of remunerative work like private tuition etc., specific sanction of the college authorities in writing shall be obtained.</li>
                        <li>(4) (a) No teacher or other person employed in a college shall send any application for employment under any other agency, except through the Secretary.</li>
                        <li>(4) (b) The committee shall not withhold any such application. It shall, however, be open to the committee to inflict sensible and reasonable conditions for relieving him/her.</li>
                        <li>(5) When a teacher or other person employed in a college seeks to accept honorary work without deterrence to his duties, prior permission of the Secretary in writing shall be received.</li>
                        <li>(6) A teacher or other person working in the college, when active in criminal proceedings, shall communicate to the college through Principal of such proceedings.</li>
                        <li>(7) No teacher or other person employed in a college shall engross himself in any political activity. He shall not associate with any political party or any organisation, which takes part in politics or shall subscribe to, or assist in any other manner, any political movement.</li>
                        <li>(8) No teacher or other person employed in a college shall contest or participate in or canvas for any election. Such restriction will not, however, apply to the teachers in respect of elections to the teachers’ constituencies.</li>
                        <li>(9) No teacher or other person employed in a college shall bring or attempt to bring any political or other influence on his superior authority in respect of his individual service interests.</li>
                        <li>(10) No teacher or other person employed in a college shall engage himself or participate in any activity which is anti-secular or which tends to create dissonance in society or in any manifestation, which is detrimental to the interests of the sovereignty and integrity of India, the security of States, friendly relation with foreign States, public order, respectability or morality or which involves contempt of Court, defamation or incitement to an offence.</li>
                        <li>(11) No teacher or other person employed in a college shall gratify in any unfavorable judgment of the policies of the Government either directly or indirectly or take part in activities which brings dishonour to the Government.</li>
                        <p>Explanation - Adoption of legitimate methods of ventilating resentment shall not be considered as criticism of the Government.</p>
                    </ul>
                </div>
            </div>

            {/* Code of Conduct & Professional Ethics For Teaching Staff In The University/Colleges */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Code of Conduct & Professional Ethics For Teaching Staff In The University/Colleges</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                    <p className="font-medium">(ANNEXURE IV: Government of Tamil Nadu, Department of Education, Manuscript Series 1988, G.o.No: 1169, Dated 28th June 1988)</p>
                </div>

                <div className="flex flex-col gap-10">
                    <ul className="pl-6 space-y-6 list-decimal list-inside">
                        <li>Every teacher shall, at all times, maintain absolute integrity and devotion to duty. He shall be strictly honorable and fair in his official dealings.</li>
                        <li>Every teachers shall be present at the place of his duty during the ordained working hours. No teachers shall be away from duty without prior permission or grant of leave except for valid reasons or unforeseen contingencies.</li>
                        <li>Every whole-time teacher of the College /University may be called upon to perform such duties as may be assigned to him beyond the prescribed working hours and declared holidays including Sunday without claim for additional remuneration.</li>
                        <li>No teacher shall leave his headquarters except with the previous permission of proper authority even during leave or vacation.</li>
                        <li>Whenever leaving the facility, a teacher shall inform the Principal / Head of the Department, if he is himself the Head of the Department, the address where he would be accessible during the period of his nonattendance from station.</li>
                        <li>Every teacher shall consecrate himself assiduous to his work and utilize his time to the service of the College/University and to the cause of education and give full co-operation in all academic programmes and other activities causative to the welfare of the student community.</li>
                        <li>Every teacher shall engage classes regularly and punctually and import lessons so as to maintain and strengthen standards of academic excellence.  His academic duties shall include guidance and instruction to students in the form of Tutorial/Seminars/Practicals and assessment/examination./valuation work assigned to him by the College/University authorities.</li>
                        <li>Every teacher shall participate amply and enthusiastically in the corporate life of the College/University and shall perform any other curricular or extra-curricular work related to the College/University as may be allotted to him by the University authorities.</li>
                        <li>No teacher shall distinguish and discriminate against any student on grounds of caste, creed, sect, religion, sex, nationality or language. He shall also disapprove such tendencies among his colleagues and students.</li>
                        <li>Every teacher shall help the College/University authorities in enforcing and maintaining discipline among students.</li>
                        <li>No teacher shall incite students against other students, teacher or College/University authorities. This does not impede with the right of a teacher to explicit his belief on principles in seminars   or other places where students are present.</li>
                        <li>Every teacher shall evaluate impartially the performance of students in tests, examinations, assignments, practicals, dissertations, theses. Etc. he should not cater in over-making, under making or other attempts at victimization on any ground.</li>
                        <li>No teacher shall resort to illegitimate use of College/University resources or facilities for personal, commercial, political or other purpose not related to the College/University.</li>
                        <li>No teachers shall resort to threats of physical harm forceful detainment, harassment or intimidation of any staff or students of the College/university with the intention of interfering with the performance of his duties.</li>
                        <li>No teacher shall refuse to execute the decision of the appropriate administrative or academic bodies of the College/university.</li>
                        <li>No teacher shall go against the canons of intellectual righteousness such as misappropriation of the writings and research findings of others.</li>
                        <li>No teacher shall take active part in politics, so as to cause hindrance in the discharge of his duties nor shall be in any manner associate himself with any movement or organization which is or tends directly or indirectly to be subversive of law and order or the interest of higher education.</li>
                        <li>No teacher shall without previous intimation to the College/University stand for election or accept nomination to any local body, legislature of the State or Parliament not shall be in any manner force his subordinates or students against their will for the canvassing of his election.</li>
                        <li>No teacher shall engage himself or take part in any demonstration or activity which is prejudicial to the sovereignty or integrity of India, the security of the State, the friendly relation with foreign Status, public order, decency or morality or which involves disrespect of Court, deformation or incitement to an offence.</li>
                        <li>No teacher shall in any radio broadcast or in any written document publish anonymously or in his own name or in the name of any other person or in any communication to the electronic media make any statement or public utterance or express an opinion.</li>
                        <ul className="pl-6 space-y-6 list-disc list-inside">
                            <li>Which is in the nature of character assassination, contemplation on the personal life of his superiors, or</li>
                            <li>Which is in the nature of criticism of individuals as distinct from policy decision. Provided that nothing in this rule shall apply to any statement made or view</li>
                            <li>Expressed by a teacher in his official capacity or in the due performance of the duties assigned to him on academic matters.</li>
                        </ul>
                        <li>No teacher shall except in accordance with any general or special orders of the College/University or in the performance in good faith or duties assigned to him divulge or communicate directly or indirectly any official documents or other confidential information whatsoever to any teacher or to any other person to whom he is not commissioned to disclose or communicate such document or information.</li>
                        <li>No teacher shall except with the previous permission of the College/university authorities, engage himself directly or indirectly in any business or private or accept any other employment.</li>
                        <li>Every teacher shall on his first appointment to the College/ University and thereafter individually submit a return in the prescribed form in details of movable, immovable and valuable property owned, acquired or inherited by him or held by him on lease or mortgage, either in his own name or in the name of any member of his family or in the name of any other person.</li>
                        <li>No teacher shall except with previous sanction of the College/University accept or permit his wife or any other member of his family to accept from any person any gift of more than grilling value. The interpretation of the term “trifling value” shall be the same as laid down in the Government Servants conduct rules.</li>
                        <li>No teacher shall speculate in any business nor shall be make or permit his wife or any members of his family to make any investment likely to embarrass or influence him in the discharge of his official duties.</li>
                        <li>No teacher shall lend money at interest to any person nor shall he/she borrow money from any person with whom he is likely to have official transactions beyond the financial ceilings.</li>
                        <li>A teacher shall go manage his private affairs as to avoid habitual indebtedness or insolvency. When a teacher is found liable to arrest from debt or has recourse to insolvency or when it is found that a moiety of his salary is continuously being attended, he way be liable for disciplinary action which legal. Proceedings for insolvency shall forthwith report full facts to the college/University.</li>
                        <li>A teacher who gets involved in some criminal proceedings shall immediately inform the College/University irrespective of the fact whether he has been released on bail or not.</li>
                        <li>A teacher who is detained in Police custody whether on criminal charge or otherwise for a period of longer than forty eight hours shall not join his duty unless he gets written permission from the College/ University  be deemed to have been suspended from the date on which he was taken to Police custody.</li>
                        <li>No teacher shall except with the previous sanction of the College/University have assistance to any Court of law or the media for the exoneration of any official act which has been the subject matter of harmful criticism or an connect of depreciate Character.</li>
                        <li>A teacher intending to marry a person who holds a citizenship of another foreign counter shall seek prior permission of the management of the College/University.</li>
                        <li>No teacher who has a wife living shall contract another marriage without first obtaining the permission of the College/University not withstanding that a subsequent marriage is permissible under the personal and religious law for the time being relevant to him.</li>
                        <li>Whenever a teacher wishes to put forth any claim or seeks redressal of any resentment or of any wrong done to him, he must forward his case through the Head of the Department to the Principal and to the Secretary of the college.</li>
                        <li>No teacher shall be a signatory to any joint representation addressed to the authorized for redressed of any grievance or any other matter.</li>
                    </ul>
                </div>
            </div>

            {/* Guidelines for Teaching & Non-Teaching Staff Issued by the Management */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Guidelines for Teaching & Non-Teaching Staff Issued by the Management</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-10">
                    <ul className="pl-6 space-y-6 list-decimal list-inside">
                        <li>All teaching & non-teaching staff of the college shall be governed by the terms & conditions of the agreements on Form 7(a), 7(b), 7(c) of the Tamil Nadu Private Colleges Regulation Act 1976 according to as they are permanent teaching, temporary teaching or non-teaching staff respectively.</li>
                        <li>All teaching & non-teaching members of staff shall observe the instructions regarding the attendance issued by the Regional Deputy Director of Collegiate Education.</li>
                        <ul className="pl-6 space-y-6 list-disc list-inside">
                            <li>That all teaching staff shall sign the attendance at the beginning of the College session namely before 8.30 A.M. and they shall be available in the college during the working hours of the College (i.e. 8.30 A.M. to 1.30 P.M.) Evening College timing  (2.00 p.m. to 6.30 p.m.)</li>
                            <li>All non-teaching staff shall sign the attendance at the beginning of the College before 8.30 A.M. and shall be in the work spot for 8 (Eight) hours irrespective of the hours of functioning of the College.</li>
                            <li>No teaching & non-teaching staff shall absent themselves without written prior permission of the Principal as a matter of course.</li>
                            <li>All teaching & non-teaching staff members shall acquire the permission in writing of the Principal if they want to attend late or leave the College early after signing the attendance.</li>
                            <li>If the teaching & non-teaching staff members are absent without taking prior written permission of the Principal, they shall be liable for cut in casual leave or earned leave as the case may be.</li>
                            <li>Any habitual late coming or absence without proper permission will be viewed seriously and appropriate action will be taken.</li>
                            <li>All leave application letter proposals for faculty, improvement scheme etc., or examination on other duty shall be submitted well in advance to the Principal for processing and getting the approval of the Management in time.</li>
                            <li>No member of the staff shall address any correspondence directly either to the Management or the Government authorities.  Such correspondences should always be routed through the principal.</li>
                            <li>All members of the staff intending to represent matters to the Government or any other authorities shall take the prior written permission of the Management for the purpose.</li>
                        </ul>
                        <li>All members of the teaching and non-teaching staff are requested to abstain from holding, addressing meetings or demonstrations etc., at any time within the Campus.</li>
                        <li>All members of the staff are requested to refrain from any activity which will lead to the disruption of the peace and calm of the Campus and shall not indulge themselves in activities prejudicial to the interest of the Institution or other individual staff members like incitement, abuse, and assault including reference to Community.</li>
                    </ul>
                </div>
            </div>

            {/* Code Of Conduct For Students */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Code Of Conduct For Students</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-10">
                    <ul className="pl-6 space-y-6 list-disc list-inside">
                        <li>The use of mobile phones by the students is stringently prohibited inside the college campus. If the students are found using the cell phone, rigorous disciplinary action will be appropriated against them.</li>
                        <li>Students travelling by two-wheeler should mandatorily wear helmets. Those students wearing the helmets alone are permitted to park their vehicles inside the college premises. Vehicles are to be parked in the parking slot only.</li>
                        <li>Students should wear their ID – Card compulsorily while in the college campus and in particular while inside the classroom.</li>
                        <li>Each student will be given a login-ID and password to know their attendance at regular intervals, marks secured in examinations, and to select their inter-disciplinary optional subjects if coveted. It is projected to provide a unique login id and password to parents in order to know the attendance details & academic performance of their wards.</li>
                        <li>Students are expected to bear on the principle of dignity and propriety in their dress and behaviour.</li>
                        <li>Students are expected to be in formal dress. Boys & Girls are well-advised not to wear jeans, T-Shirts of any kind. Girls are advised to wear simple and modest attire. Girls are expected to be in saree or in salwar kameez</li>
                        <li>Students found blameworthy of detrimental, damaging, and defiling the college property will have to face direful consequences.</li>
                    </ul>
                </div>
            </div>

            {/* Rules Regarding Attendance & Leave Of Absence */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Rules Regarding Attendance & Leave Of Absence </h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-10">
                    <ul className="pl-6 space-y-6 list-disc list-inside">
                        <li>It shall be the responsibility of each student to attend classes on a regular basis and punctually.</li>
                        <li>No student shall absent himself/herself from any class without proper application for leave. Application for leave of absence must be made beforehand in the ordained form. If absence is necessitated by unforeseen circumstances, an application for leave must be submitted not later than the first day of his/her return to the college. Leave applied for in time will normally be granted when proper reasons are given. In case of illness exceeding five days, the HOD/Principal may demand a Medical Certificate in support thereof.</li>
                        <li>Leave applications should be countersigned by a parent or guardian.</li>
                        <li>Leave applications should be submitted by students to their respective HODs.</li>
                        <li>If a student absents himself/herself without revealing the reason for leave, for a period of ten working days, he/she is liable to be taken off the rols.</li>
                        <li>A student must attend at least 75% of the working days to be able to write his degree examination.</li>
                        <li>A student's attendance, his/her academic progress, and conduct as evaluated by the staff and the Principal will be the only consideration for promotion to the succeeding academic year or selection for the University Examinations. The Principal may at his  liberty to require a student who does not show competent progress in studies or who is irregular in attendance to withdraw from the</li>
                        <li>Students, who represent the college at debates/seminars/cultural meets/sports/games and other extra-curricular activities like NCC, NSS, CCC, and Rotaract, will earn attendance when the deputations are properly authorized by the appropriate faculty-in-charge.</li>
                    </ul>
                </div>
            </div>

            {/* ‘Appreciate’: A Handbook Of Code Of Conduct */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">‘Appreciate’: A Handbook Of Code Of Conduct</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-10">
                    <h1 className="font-semibold">Preamble :-</h1>
                    <p>Dwaraka Doss Goverdhan Doss Vaishnav College believes in character building among the students, as a good character is most fundamental, an essential prerequisite for an individual to achieve success in academics and also emerge as a socially responsible citizen.</p>
                    <p>The college recognizes the need to nurture self-discipline, as it fosters the acquisition of values and infuses the spirit of learning. To ensure the development of the self–discipline, the college has drafted a set of rules and laid down standards, as codes of conduct. At the center of all these norms are the core values that build one’s character. ‘Appreciates’ stands for and represents the following.</p>
                    <ul className="pl-6 space-y-6 list-disc list-inside">
                        <li>A - Attitude</li>
                        <li>P -  Perseverance</li>
                        <li>P -  Performance</li>
                        <li>R -  Respect</li>
                        <li>E -  Empathy</li>
                        <li>C -  Cooperation</li>
                        <li>I - Integrity</li>
                        <li>A -  Accountability</li>
                        <li>T -  Truthfulness</li>
                        <li>E -  Enterprise</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-10">
                    <h1 className="font-semibold">Policies & Standards :-</h1>
                    <h1>When a student enrolls in the college, he/she enters into an agreement to abide by the rules and regulations set by the college. This denotes not just academic performance but also good conduct essential for the development of responsible citizenship. The standards upheld derive from the goals of infusing respect for oneself, for others, and for society. The prescribed standards intend to promote self-discipline essential for academic achievement and personal integrity.</h1>
                </div>
                <div className="flex flex-col gap-10">
                    <h1 className="font-semibold">Ethical Standards :-</h1>
                    <p>It is expected of the students to show respect for discipline, order, morality, personal honor and to perform their duties, protect the rights of other as expected of a socially responsible citizen. The code of conduct is adopted to promote a safe and orderly learning environment that makes learning a rewarding experience.</p>
                    <p>These rules of good conduct highlight some general and specific expectations that the college has of the students in order to ensure a safe and healthy learning environment, guided by the principle of need for self-respected and concern for others and the environment.</p>
                </div>
                <div className="flex flex-col gap-10">
                    <Table>
                        <TableBody>
                            {EthicalStandards.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{data.desc1}</TableCell>
                                    <TableCell>{data.desc2}</TableCell>
                                    <TableCell>{data.desc3}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Students Attributes Facilitated By The Institution */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-blue-500">Students Attributes Facilitated By The Institution</h1>
                    <span className="w-full border-b rounded-full border-neutral-400"></span>
                </div>

                <div className="flex flex-col gap-6">
                    <h1>Dwaraka Doss Goverdhan Doss Vaishnav College imparts college education in such a manner that it focuses on ingraining beliefs and values in students in order to make them ambitious, goal oriented, sincere, dedicated, responsible citizens of the nation. The college ensures that students possess all the essential attributes so that they can come through as individuals and contribute significantly to the betterment of society. The college imparts the following attributes, which helps them to adopt and imbibe the core values such as – excellence, creativity, diversity, integrity, and empathy.</h1>
                    <h1>The students of the college should:</h1>
                    {StudentsAttributes.map((data, index) => (
                        <ul key={index} className="flex flex-col gap-2 pl-6 list-disc list-inside">
                            <li>{data.title}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CodeOfConduct