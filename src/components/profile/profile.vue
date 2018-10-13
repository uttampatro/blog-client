<template>
	<div id="profilePage" class="container">
		<!-- <div class="card" v-loading="fetchingData">
			<div class="card-header" style="border-bottom: 2px solid #03A9F4;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/user/detail' }">User</el-breadcrumb-item>
					<el-breadcrumb-item>Details</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
	
	
			<div class="card-body userDetailsHeader" v-if="userDetails">
				<el-tabs :tab-position="tabPosition" style="height: 400px; margin: 16px">
					<el-tab-pane label="Account Details" style="padding: 30px 150px 0 60px;">
	
						<el-form :label-position="labelPosition" label-width="160px" :model="ruleForm1">
							<el-form-item label="Name">
								<el-col :span="11">
									<el-input v-model="ruleForm1.first_name"></el-input>
								</el-col>
								<el-col :span="11" style="margin-left: 43px;">
									<el-input v-model="ruleForm1.last_name"></el-input>
								</el-col>
							</el-form-item>
	
							<el-form-item label="Email">
								<el-input v-model="ruleForm1.email"></el-input>
							</el-form-item>
							<el-form-item label="Company">
								<el-input v-model="ruleForm1.company"></el-input>
							</el-form-item>
							<el-form-item label="Role">
								<el-input v-model="ruleForm1.role"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="submitForm('ruleForm1')">Save</el-button>
								<el-button @click="resetForm('ruleForm1')">Reset</el-button>
							</el-form-item>
						</el-form>
	
	
					</el-tab-pane>
	
					<el-tab-pane label="Security" style="padding: 30px 150px 0 60px;">
						<el-form :label-position="labelPosition" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="160px" class="demo-ruleForm">
							<el-form-item label="Current Password" :prop="currentPass">
								<el-input type="password" v-model="ruleForm2.currentPass" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="New Password" :prop="pass">
								<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="Verify New Password" :prop="checkPass">
								<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="submitForm('ruleForm2')">Change password</el-button>
								<el-button @click="resetForm('ruleForm2')">Reset</el-button>
							</el-form-item>
						</el-form>
					</el-tab-pane>
				
				</el-tabs>
	
			</div>
		</div> -->
	
	</div>
</template>

<style lang="scss">
	#profilePage {
		padding-top: 30px;
		min-height: 400px;
		padding-bottom: 30px;
		margin: auto;
		.fontIconContainer {
			width: 15px;
			display: inline-block;
			text-align: center;
			padding-right: 18px;
		}
		.profileHeader {
			font-size: 18px;
			color: #607d8b;
			line-height: 25px;
			.systemId {
				font-size: 11px;
				i {
					color: #FFC107;
					font-size: 11px;
				}
			}
		}
		.profile {
			margin-top: 20px;
			.profilePropertiesPanel {
				.profileProperties {
					padding: 0px;
					.propertyContainer {
						padding: 10px;
						border-bottom: 1px solid #ddd;
						.key {
							font-size: 15px;
							line-height: 25px;
							color: #666;
						}
						.value {
							font-size: 12px;
							color: #999;
						}
					}
				}
			}
			.sessionsPanel {
				.sessionContainer {
					padding: 0px;
					overflow-x: hidden;
					.sessionItem {
						padding: 10px;
						color: #666;
						font-size: 15px;
						.sessionTime {
							a {
								color: #2196F3;
							}
						}
						.deviceOsInfo {
							font-size: 11px;
							color: #777;
							text-align: right;
						}
						.profileActions {
							font-size: 12px;
							color: #999;
							margin-top: 5px;
						}
						.errorsDiv {
							font-size: 11px;
							color: #ff0000ba;
							font-weight: bold;
							text-align: right;
						}
						border-bottom: 1px solid #ddd;
					}
				}
			}
		}
	}
</style>

<script>
	import ProfileComponent from "./profileComponent";
	export default ProfileComponent;
</script>