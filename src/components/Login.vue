<template>
	<div class="content">
		<Form :label-width="80" :rules="ruleValidate" :model="login">
			<FormItem label="用户名" prop="name">
				<Input type="text" v-model="login.name"></Input>
			</FormItem>
			<FormItem label="密码" prop="pwd">
				<Input type="password" v-model="login.pwd"></Input>
			</FormItem>
			<FormItem>
				<Button @click="con()" long type="primary">提交</Button>
			</FormItem>
		</Form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value:[20,50],
				login:{
					name:'',
					pwd:''
				},
				ruleValidate:{
					name:{
						required:true,
						message:'名字不能为空',
						trigger:'blur'
					}
				}
			}
		},
		methods:{
			con() {
				this.$router.push('/')
			}
		}
	}
</script>
<style type="text/css">
	.content{
		width: 300px;
		margin:auto;
	}
</style>