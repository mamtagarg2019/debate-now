import React, { useState } from 'react'
import DateTime from 'react-datetime'
import { scheduleDebate } from '../api/debate'

function CreateDebate () {
    const [ info, setInfo ] = useState({})
    const [ created, setCreated] = useState(false)

    const submit = () => {
        console.log(info, "info")
        scheduleDebate(info)
            .then(res => setCreated(true))
    }

    return (
        <section className="join-debate-world profile-main">
			<div className="container">
				<div className="row padding-l-r pattern-bg">
					<div className="col-12 col-lg-8 mx-auto d-flex align-items-center justify-content-center" style={{ position: "relative", zIndex: 0 }}>
						<div className="profile_section w-100">
							<div className="profile-inner">
								<h2 className="text-center">Schedule Debate</h2>
									<form>
                                        {created ? <p>Debate created successfully!</p> : null}
										<div className="scroll_box">
											<div className="col-12">
												<div className="form-group row">
												<label for="bio" className="col-sm-4 col-form-label text-right">Topic</label>
												<div className="col-sm-8">
                                                    <textarea 
                                                        colspan="5" 
                                                        type="text" 
                                                        className="form-control" id="bio" placeholder=""
                                                        onChange={(e) => setInfo({ ...info, 'debate_title': e.target.value }) }></textarea>
													<small>Describe in 160 words or less.</small>
												</div>
												</div>
												<div className="form-group row">
													<label for="username" className="col-sm-4 col-form-label text-right">Motion</label>
													<div className="col-sm-8">
														<select name="primary" className="form-control" id="primary1" onChange={(e) => setInfo({ ...info, 'debate_motion' : e.target.value })}>
															<option value="FOLLOW">Follow</option>
															<option value="AGAINST">Against</option>
														</select>
													</div>
												</div>
												<div className="form-group row">
													<label for="language" className="col-sm-4 col-form-label text-right">Language</label>
													<div className="col-sm-8">
														<div className="row">
															<div className="col">
																<select name="Language" className="form-control" id="Language1" onChange={(e) => setInfo({ ...info, 'debate_language' : e.target.value })}>
																	<option value="1">Spanish</option>
																	<option value="2">English</option>
																</select>
															</div>
														</div>
													</div>
												</div>			
												<div className="form-group row">
													<label for="username" className="col-sm-4 col-form-label text-right">Date/Time</label>
													<div className="col-sm-8">
														<div className="row">
															<div className="col-lg-12">
                                                                <DateTime 
                                                                    closeOnSelect={true}
                                                                    onChange={(date) => setInfo({...info, 'debate_start_datetime': date._d })}/>
															</div>
															{/* <div className="col-lg-12 mt-3">
																<input type="time" className="form-control" id="time" placeholder=""/>
															</div> */}
														</div>
													</div>
												</div>

												<div className="form-group row">
													<label for="language" className="col-sm-4 col-form-label text-right">Format</label>
													<div className="col-sm-8">
														<select name="primary" className="form-control" id="primary1" onChange={(e) =>  setInfo({...info, 'debate_format_id' : e.target.value})}>
															<option value="1">Lincoin Douglas</option>
															<option value="2">Public Forum</option>
															<option value="3">Design your debate</option>
														</select>
													</div>
												</div>

												<div className="form-group row mb-0">
													<label for="language" className="col-sm-4 col-form-label text-right">Proficiency</label>
													<div className="col-sm-8">
														<select name="primary" className="form-control" id="primary1" onChange={(e) => setInfo({ ...info, "debate_proficiency_level" : e.target.value })}>
															<option value="BEGINNER">Beginner</option>
															<option value="INTERMEDIATE">Intermediate</option>
															<option value="ADVANCED">Advance</option>
														</select>
													</div>
												</div>	
											</div>
										</div>	
										
										<div className="col-12">										
											<div className="row">
												<div className="col-sm-4"></div>
												<div className="col-sm-8">
													<div className="row">
														<div className="col-6 mx-auto">
															<button className="btn" type="button" onClick={submit}>Submit</button>
														</div>
													</div>
												</div>												
											</div>									
											<div className="row">
												<div className="col-sm-4"></div>
												<div className="col-sm-8">
													<a href="/login" className="back-btn">back</a>
												</div>
											</div>
										</div>
									</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default CreateDebate

