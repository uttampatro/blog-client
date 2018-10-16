<template>
	<div id="createArticlePage" class="container">
	
		<el-form ref="form" v-model="form" label-width="220px" style="width:1000px">
			<el-form-item label="Title">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="Content">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">Create</el-button>
				<el-button>Cancel</el-button>
			</el-form-item>
		</el-form>
	
	</div>
</template>

<style lang="scss">
	#createArticlePage {
		padding-top: 30px;
		min-height: 400px;
		padding-bottom: 30px;
		margin: auto;
		.loadingDiv {
			min-height: 100px;
			/* background: white; */
		}
		.fontIconContainer {
			width: 15px;
			display: inline-block;
			text-align: center;
			padding-right: 18px;
		}
		.createArticleHeader {
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
		.createArticle {
			margin-top: 20px;
			.customerPropertiesPanel {
				.customerProperties {
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
						.customerActions {
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
	import CreateArticleComponent from "./createArticleComponent";
	export default CreateArticleComponent;
</script>