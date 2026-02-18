# Changelog

## 0.31.0 (2026-02-18)

Full Changelog: [v0.30.0...v0.31.0](https://github.com/hyperspell/node-sdk/compare/v0.30.0...v0.31.0)

### Features

* **api:** api update ([cf01503](https://github.com/hyperspell/node-sdk/commit/cf01503ae907a172075d4d16342c01feb565f9d0))
* **api:** api update ([9ad9b82](https://github.com/hyperspell/node-sdk/commit/9ad9b82adb38e3732feb664a94b5c64424173f4d))
* **api:** api update ([19c3610](https://github.com/hyperspell/node-sdk/commit/19c3610a96111b6476bcfa832272defb6be734d2))
* **api:** api update ([3d27c34](https://github.com/hyperspell/node-sdk/commit/3d27c349c184e5a945a01f91f167c19ca75dac15))
* **api:** api update ([d430de7](https://github.com/hyperspell/node-sdk/commit/d430de753f07b21551315d1c1250c3203e6fe1b2))
* **api:** api update ([14fd74c](https://github.com/hyperspell/node-sdk/commit/14fd74c818b355e38342554ddfa652c22da8a5ac))
* **api:** api update ([5cefb0c](https://github.com/hyperspell/node-sdk/commit/5cefb0c04806e2a0e9bea53bb7428ff773696008))
* **api:** api update ([a0df1be](https://github.com/hyperspell/node-sdk/commit/a0df1be8d411efda7d9c06ba663e64a72e308de0))
* **api:** manual updates ([284aea8](https://github.com/hyperspell/node-sdk/commit/284aea8ec3ba5c1f6698d92f83fe41c8b39c4e54))
* **api:** manual updates ([0d5f484](https://github.com/hyperspell/node-sdk/commit/0d5f484b10f13e89c5bc85878180113ea7beb2aa))
* **mcp:** add initial server instructions ([581fb5e](https://github.com/hyperspell/node-sdk/commit/581fb5e5aaf49b32facacc9adc28ca3797dbd117))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([5b29273](https://github.com/hyperspell/node-sdk/commit/5b2927352218310b6e3a3ec4c950dc4e8d15cbf9))
* **client:** avoid removing abort listener too early ([b9c9fdd](https://github.com/hyperspell/node-sdk/commit/b9c9fdd0b68027777d2a352ccc6801ef7c6a0a55))
* **docs:** fix mcp installation instructions for remote servers ([d4c938b](https://github.com/hyperspell/node-sdk/commit/d4c938b9490184c9de54a36e0635b3b7b24e8aeb))
* **mcp:** allow falling back for required env variables ([6054c99](https://github.com/hyperspell/node-sdk/commit/6054c99672bb1399b5db94931d20979394ab9f60))


### Chores

* **ci:** upgrade `actions/github-script` ([090b5c1](https://github.com/hyperspell/node-sdk/commit/090b5c1a28992d318a2904cabe73556f61e76edf))
* **client:** do not parse responses with empty content-length ([b7dde77](https://github.com/hyperspell/node-sdk/commit/b7dde774dee58aaf475d07c08d8792753c09fc85))
* **client:** restructure abort controller binding ([ecf2c20](https://github.com/hyperspell/node-sdk/commit/ecf2c20a9d7aa7cfb1d5734a14ba75a4f5ebe0e8))
* **internal/client:** fix form-urlencoded requests ([f18c133](https://github.com/hyperspell/node-sdk/commit/f18c133e21632a165e90c6170fc9fba8f1455bbe))
* **internal:** add health check to MCP server when running in HTTP mode ([2ab3844](https://github.com/hyperspell/node-sdk/commit/2ab3844ada3f3bbe0ea5559dc9b9a9f20f00d8e2))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([a4192e2](https://github.com/hyperspell/node-sdk/commit/a4192e29921822cf5122a2630640315cdd623005))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([45eec97](https://github.com/hyperspell/node-sdk/commit/45eec97a147ffed11fdbd184e3e01694689e0e76))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([9af9bfa](https://github.com/hyperspell/node-sdk/commit/9af9bfa16c4f5e35c6f4e7f36d7583a662167c45))
* **internal:** avoid type checking errors with ts-reset ([b44d11c](https://github.com/hyperspell/node-sdk/commit/b44d11c860d0895bfc04c893eaf1af1e646eac48))
* **internal:** codegen related update ([1c6bacc](https://github.com/hyperspell/node-sdk/commit/1c6bacc1daa1c93198ea61ec75325cf7dc1e7950))
* **internal:** fix pagination internals not accepting option promises ([e7397fe](https://github.com/hyperspell/node-sdk/commit/e7397fe75b576992632351adeb5e7777e5b38529))
* **internal:** improve layout of generated MCP server files ([2da53b8](https://github.com/hyperspell/node-sdk/commit/2da53b8ada557168c77b24d95f64003f1b2a617f))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([051f042](https://github.com/hyperspell/node-sdk/commit/051f0428d7d30eadf1deb83214757e98e7cb86c0))
* **internal:** support oauth authorization code flow for MCP servers ([027ce2c](https://github.com/hyperspell/node-sdk/commit/027ce2cd7d3164f49134235a10446ed1e838d17f))
* **internal:** update `actions/checkout` version ([954ce30](https://github.com/hyperspell/node-sdk/commit/954ce3099c58efa8c5071b6830dad969401a050a))
* **internal:** update lock file ([e192aa3](https://github.com/hyperspell/node-sdk/commit/e192aa3c9ac16fb38cad2e56f2e46498eb11f8ee))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([80176c6](https://github.com/hyperspell/node-sdk/commit/80176c61f90878132ec0e77ef239712d57e36b33))
* **mcp:** up tsconfig lib version to es2022 ([db052dc](https://github.com/hyperspell/node-sdk/commit/db052dcd1a475b54cb7c302df23bcfaa73c969d0))

## 0.30.0 (2026-01-16)

Full Changelog: [v0.29.0...v0.30.0](https://github.com/hyperspell/node-sdk/compare/v0.29.0...v0.30.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** api update ([84d8505](https://github.com/hyperspell/node-sdk/commit/84d8505ddd4e272872a50ebe012e2074772565ba))
* **api:** manual updates ([f8ecbf0](https://github.com/hyperspell/node-sdk/commit/f8ecbf022b9bbd886d0f92330bf28112253036fc))


### Bug Fixes

* **mcp:** correct code tool api output types ([b3e2519](https://github.com/hyperspell/node-sdk/commit/b3e2519cd7e4163614969336dbfc52b014b5c3c1))
* **mcp:** fix env parsing ([7741041](https://github.com/hyperspell/node-sdk/commit/7741041a400221447d8d3c193d4309ef593bdd75))
* **mcp:** fix options parsing ([918c00b](https://github.com/hyperspell/node-sdk/commit/918c00b99d1a5d113162357a84fe30df1cd7f0d4))
* **mcp:** pass base url to code tool ([5cb1499](https://github.com/hyperspell/node-sdk/commit/5cb1499f5651f1fd65ff80c6ed9f231c160b0a62))
* **mcp:** update code tool prompt ([3dd3bf4](https://github.com/hyperspell/node-sdk/commit/3dd3bf40dbed106d09e8a8b3e858cc173c6cb8e0))


### Chores

* break long lines in snippets into multiline ([fd4370d](https://github.com/hyperspell/node-sdk/commit/fd4370d564345e30444e9de3ce30d1305b146c82))
* fix typo in descriptions ([7b8beab](https://github.com/hyperspell/node-sdk/commit/7b8beab39afc24f06c5b5aacc12da2153fbb0cbe))
* **internal:** codegen related update ([4ddb1fb](https://github.com/hyperspell/node-sdk/commit/4ddb1fba99894fcedb9717241d08fe86c33164c7))
* **internal:** codegen related update ([beaee3f](https://github.com/hyperspell/node-sdk/commit/beaee3fd24c50a3b40c0d6f70d63d7101af8305e))
* **internal:** codegen related update ([b754f1f](https://github.com/hyperspell/node-sdk/commit/b754f1fb7ec3a47d275cbafa1eba0ab90d3f0091))
* **internal:** codegen related update ([c693c35](https://github.com/hyperspell/node-sdk/commit/c693c35e951375c8186d0406f932fff8cd44e4c8))
* **internal:** codegen related update ([f7fb438](https://github.com/hyperspell/node-sdk/commit/f7fb438f6cbcc3110300ebba9e406f7d53804cc3))
* **internal:** fix dockerfile ([91fb24c](https://github.com/hyperspell/node-sdk/commit/91fb24cdf187a0ec47521c2dc8cbc6e6a8d23264))
* **internal:** upgrade babel, qs, js-yaml ([c8b8f57](https://github.com/hyperspell/node-sdk/commit/c8b8f57d90a8670f648439743b89910f1bfc43b2))
* **mcp:** add intent param to execute tool ([b6a908e](https://github.com/hyperspell/node-sdk/commit/b6a908ec045addd7c20a3925cb54c70140d5bb30))
* **mcp:** pass intent param to execute handler ([ed7d524](https://github.com/hyperspell/node-sdk/commit/ed7d52417949ac6e3e367f726074fffb64c03691))
* **mcp:** remove deprecated tool schemes ([5aa93e0](https://github.com/hyperspell/node-sdk/commit/5aa93e0c5b58a2023376fe6e82a91982c122fd91))
* **mcp:** upgrade dependencies ([526ebc1](https://github.com/hyperspell/node-sdk/commit/526ebc1af8780b0f754d7828899f9afea2dadc4f))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([b84e864](https://github.com/hyperspell/node-sdk/commit/b84e864d022974598ce18c55c71ba7b56ba3dc70))

## 0.29.0 (2025-12-16)

Full Changelog: [v0.27.0...v0.29.0](https://github.com/hyperspell/node-sdk/compare/v0.27.0...v0.29.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#32](https://github.com/hyperspell/node-sdk/issues/32)) ([ecdef89](https://github.com/hyperspell/node-sdk/commit/ecdef891f2210522efe31e5120d26ad572432f3b))
* **api:** api update ([e857154](https://github.com/hyperspell/node-sdk/commit/e857154b4c1a706dc7dc3628c715d384744193f1))
* **api:** api update ([56eac47](https://github.com/hyperspell/node-sdk/commit/56eac4744ace31b95ad81d614b2b6165e78ef463))
* **api:** api update ([c1fb3c4](https://github.com/hyperspell/node-sdk/commit/c1fb3c4aafa35d7806fb58921f2c13b2b700ad4b))
* **api:** api update ([c3c4b7e](https://github.com/hyperspell/node-sdk/commit/c3c4b7e298142c9921db702fc88893573f5f8c5b))
* **api:** api update ([9191f0a](https://github.com/hyperspell/node-sdk/commit/9191f0afb4ed3046be3140a157501c6125ec9126))
* **api:** api update ([5ccc509](https://github.com/hyperspell/node-sdk/commit/5ccc50944b5d6f712d8329f1d3695a64cdfbcb10))
* **api:** api update ([0464e87](https://github.com/hyperspell/node-sdk/commit/0464e871864b48f1514048c90539fe7063388f23))
* **api:** api update ([6ace937](https://github.com/hyperspell/node-sdk/commit/6ace937814906a2423a4d318eb33205f2afd1064))
* **api:** api update ([0b2d638](https://github.com/hyperspell/node-sdk/commit/0b2d6387d4eeeac28e45d95b02a84607ee0de293))
* **api:** api update ([b6c7bb7](https://github.com/hyperspell/node-sdk/commit/b6c7bb738aef3ad53d711ce3bfec17d3a49dfa8b))
* **api:** api update ([b57fed4](https://github.com/hyperspell/node-sdk/commit/b57fed43958e7990952357edd7ba74ba174b5c3e))
* **api:** api update ([63f3df5](https://github.com/hyperspell/node-sdk/commit/63f3df5f3714cb4b2d3d4ea6267e5f075cfebd2c))
* **api:** api update ([f052117](https://github.com/hyperspell/node-sdk/commit/f0521175118624ad93fca9499d7c8d557edcc5a5))
* **api:** api update ([c7b3bb7](https://github.com/hyperspell/node-sdk/commit/c7b3bb73249c40bbb92904caf2b4059ae1dba0e3))
* **api:** api update ([809fb16](https://github.com/hyperspell/node-sdk/commit/809fb16627ea2835330dc6041a3f0f59caf6cf18))
* **api:** api update ([e30bf2f](https://github.com/hyperspell/node-sdk/commit/e30bf2fe5e09d8f2140d7494876e069736f6abca))
* **api:** api update ([1ac38b9](https://github.com/hyperspell/node-sdk/commit/1ac38b97354a67581e7c78e4aff08b7daa6fde34))
* **api:** api update ([4b20565](https://github.com/hyperspell/node-sdk/commit/4b20565bb754222323cc83e45da404edba5177bf))
* **api:** api update ([3d87ae2](https://github.com/hyperspell/node-sdk/commit/3d87ae2db325d2a7de840fcab5b753394285dd49))
* **api:** api update ([3632745](https://github.com/hyperspell/node-sdk/commit/3632745375399224f236fed1c13f8a17f22d1caa))
* **api:** api update ([086f49d](https://github.com/hyperspell/node-sdk/commit/086f49d60602fcddd4a35288ffe69e0c622ff84d))
* **api:** api update ([cefe243](https://github.com/hyperspell/node-sdk/commit/cefe2431b9038f3571cf8d30cda35d06e50a6892))
* **api:** api update ([fd28af6](https://github.com/hyperspell/node-sdk/commit/fd28af6865428470f24aa3b74618bc7c285084a0))
* **api:** api update ([144c520](https://github.com/hyperspell/node-sdk/commit/144c520a6950007b577d8572d0ed07fe77ccb6cb))
* **api:** api update ([4d199a6](https://github.com/hyperspell/node-sdk/commit/4d199a6a4d13acea6d602c7e6912b25ba8b69357))
* **api:** api update ([6122fb8](https://github.com/hyperspell/node-sdk/commit/6122fb8a0817e92f2665d103278eb6d946d60013))
* **api:** api update ([cc5505c](https://github.com/hyperspell/node-sdk/commit/cc5505ce2b352a23f91b28ace3e6f6c04229acf3))
* **api:** api update ([a90e7f5](https://github.com/hyperspell/node-sdk/commit/a90e7f56a4a898bd629f500949bff54aa0ff6046))
* **api:** api update ([ffee59f](https://github.com/hyperspell/node-sdk/commit/ffee59fefc3926c86aaa147936c3264900d9ae3e))
* **api:** api update ([b0c556a](https://github.com/hyperspell/node-sdk/commit/b0c556a79a7c11b5f277f8b9f56a22f8aa591ca5))
* **api:** api update ([97abf79](https://github.com/hyperspell/node-sdk/commit/97abf798eb472aa7ad7c471651b149358385d6d1))
* **api:** api update ([ace1ff1](https://github.com/hyperspell/node-sdk/commit/ace1ff15d2f1efffaf828ee8e48e4e06fb09091e))
* **api:** api update ([dcc1551](https://github.com/hyperspell/node-sdk/commit/dcc155132a0d130ff62a64de0847b612e7e477fc))
* **api:** api update ([6f9c746](https://github.com/hyperspell/node-sdk/commit/6f9c74687f4e79cf83ed0d5b705064ab0b5d413e))
* **api:** api update ([d297aa4](https://github.com/hyperspell/node-sdk/commit/d297aa4cbd7b2373713381cbbd8c15f64d240d8c))
* **api:** api update ([8b34c9c](https://github.com/hyperspell/node-sdk/commit/8b34c9c53094a169859994230d3100dadb68fd92))
* **api:** api update ([8e96b1d](https://github.com/hyperspell/node-sdk/commit/8e96b1d77f28d18a252a3a3eccaf5f4345a56159))
* **api:** api update ([0cfb6ba](https://github.com/hyperspell/node-sdk/commit/0cfb6ba9bdac14f4c8c5fd6b6748940aab3c747b))
* **api:** api update ([7fc15c1](https://github.com/hyperspell/node-sdk/commit/7fc15c1e157998bf4713f7008ad190e10cdb6931))
* **api:** api update ([a9f4767](https://github.com/hyperspell/node-sdk/commit/a9f47673364b5e8f8b2fcfee54b2c7a22eca9d2b))
* **api:** api update ([#42](https://github.com/hyperspell/node-sdk/issues/42)) ([9e25c59](https://github.com/hyperspell/node-sdk/commit/9e25c59176277df1cd2999ed875968d68137f93d))
* **api:** api update ([#45](https://github.com/hyperspell/node-sdk/issues/45)) ([c3a3155](https://github.com/hyperspell/node-sdk/commit/c3a315587edbcb59c75c382d04139b2b11b6f0a8))
* **api:** api update ([#50](https://github.com/hyperspell/node-sdk/issues/50)) ([83c66fb](https://github.com/hyperspell/node-sdk/commit/83c66fb558a9aa88ddf82db79e32b4d77de40b44))
* **api:** api update ([#53](https://github.com/hyperspell/node-sdk/issues/53)) ([32b52ca](https://github.com/hyperspell/node-sdk/commit/32b52ca847549a290c5fa607a81798b183fdee0c))
* **api:** api update ([#54](https://github.com/hyperspell/node-sdk/issues/54)) ([90e3bd2](https://github.com/hyperspell/node-sdk/commit/90e3bd208b5710c52acd2ac01ae40f571f07b499))
* **api:** api update ([#55](https://github.com/hyperspell/node-sdk/issues/55)) ([6ea3488](https://github.com/hyperspell/node-sdk/commit/6ea348848f1d22e9c9e4dc9bf9f4304d18b7e253))
* **api:** api update ([#56](https://github.com/hyperspell/node-sdk/issues/56)) ([8206477](https://github.com/hyperspell/node-sdk/commit/8206477f03333625de9885a0856830911e065ff2))
* **api:** update via SDK Studio ([af230b3](https://github.com/hyperspell/node-sdk/commit/af230b367791b85d4c8d00aa5231e71e5b00c848))
* **api:** update via SDK Studio ([0605f55](https://github.com/hyperspell/node-sdk/commit/0605f55ba71434e411d25162302742b65f469d1e))
* **api:** update via SDK Studio ([4d42a43](https://github.com/hyperspell/node-sdk/commit/4d42a43e41a6c5025d556248b20ab2b67b488902))
* **api:** update via SDK Studio ([c3a9f7b](https://github.com/hyperspell/node-sdk/commit/c3a9f7ba14118b8270f3a64d583a6bb11776d17e))
* **api:** update via SDK Studio ([8a17972](https://github.com/hyperspell/node-sdk/commit/8a179727d98ee9af7110bb5cebe7e07ac6c7cdcb))
* **api:** update via SDK Studio ([3ef6c75](https://github.com/hyperspell/node-sdk/commit/3ef6c7512ec64bdf10fa5eb3dac03e1d79e14c0c))
* **api:** update via SDK Studio ([5e25f7e](https://github.com/hyperspell/node-sdk/commit/5e25f7ed123b3de40d0796c3c8776113239997cb))
* **api:** update via SDK Studio ([37393f3](https://github.com/hyperspell/node-sdk/commit/37393f31fe9dea374bbeda1947a668c028f9ccc2))
* **api:** update via SDK Studio ([0559897](https://github.com/hyperspell/node-sdk/commit/05598978d35144f03b54d1133c54a32f37c461c4))
* **api:** update via SDK Studio ([0f61cb8](https://github.com/hyperspell/node-sdk/commit/0f61cb849a57724d22c75ccc531a70b2b3eb7c4a))
* **api:** update via SDK Studio ([e710403](https://github.com/hyperspell/node-sdk/commit/e710403e8a47a9ee170d896a7a61194f29274b45))
* **api:** update via SDK Studio ([baa723d](https://github.com/hyperspell/node-sdk/commit/baa723d44c73dce341458bdf3084e99ca71dfafa))
* **api:** update via SDK Studio ([31fdcab](https://github.com/hyperspell/node-sdk/commit/31fdcabd1455b9b8471172e0f8e185659020c333))
* **api:** update via SDK Studio ([2acfdcc](https://github.com/hyperspell/node-sdk/commit/2acfdcc68ce8c7cc560e8d12b8ce27b3189036d4))
* **api:** update via SDK Studio ([51f48ee](https://github.com/hyperspell/node-sdk/commit/51f48eecc66cc573ef99f23aa641beaab106f908))
* **api:** update via SDK Studio ([12e3a88](https://github.com/hyperspell/node-sdk/commit/12e3a88e20256aba33c33d12328982d7c1f8df67))
* **api:** update via SDK Studio ([d79a97a](https://github.com/hyperspell/node-sdk/commit/d79a97a82e1b19e3446984d78a64ac47ce7877cf))
* **api:** update via SDK Studio ([fcf51e3](https://github.com/hyperspell/node-sdk/commit/fcf51e3b76c517c6fd7dc1d68156a9b3eb0babc4))
* **api:** update via SDK Studio ([d3f6e00](https://github.com/hyperspell/node-sdk/commit/d3f6e0000db4c7b50f99243260ca5b268216c2e5))
* **api:** update via SDK Studio ([439ed2a](https://github.com/hyperspell/node-sdk/commit/439ed2accc424c60e426898cf5400e5f3545ba75))
* **api:** update via SDK Studio ([8262076](https://github.com/hyperspell/node-sdk/commit/8262076e98fe17a7638709e2c3a008e3ea4e3b3a))
* **api:** update via SDK Studio ([a90a5fe](https://github.com/hyperspell/node-sdk/commit/a90a5fea37a284c33b7c5a0f5920529795f5924f))
* **api:** update via SDK Studio ([30795a9](https://github.com/hyperspell/node-sdk/commit/30795a9be8aeeff7d1215a6d0f76ce717bfc8fdb))
* **api:** update via SDK Studio ([7712189](https://github.com/hyperspell/node-sdk/commit/7712189845a7198eece8fb12d7752f1467c7ba78))
* **api:** update via SDK Studio ([5b7ad3a](https://github.com/hyperspell/node-sdk/commit/5b7ad3a4d90e8fe728c7c635de1ad1ff3e5b8a0a))
* **api:** update via SDK Studio ([5c293ed](https://github.com/hyperspell/node-sdk/commit/5c293ed26ab72b6220bc6334b67859dc6e2e01c2))
* **api:** update via SDK Studio ([e3c9405](https://github.com/hyperspell/node-sdk/commit/e3c9405f8cc3c09738aca1d8205784b73bf6a70b))
* **api:** update via SDK Studio ([56e8d3d](https://github.com/hyperspell/node-sdk/commit/56e8d3d588b3fe39a429bae486de22c9d9df382a))
* **api:** update via SDK Studio ([a7d1ef1](https://github.com/hyperspell/node-sdk/commit/a7d1ef1925f4c1b590d8fd77769b2c0457438227))
* **api:** update via SDK Studio ([93433a4](https://github.com/hyperspell/node-sdk/commit/93433a4900d5f21ba3aa95ef143698bba2120fdc))
* **api:** update via SDK Studio ([68ff276](https://github.com/hyperspell/node-sdk/commit/68ff27614f7c6f44c2b5779dfdb4711430b3d5b5))
* **api:** update via SDK Studio ([967aec7](https://github.com/hyperspell/node-sdk/commit/967aec7b22cab5f2f1f6865aaf699652210abe82))
* **api:** update via SDK Studio ([bef3818](https://github.com/hyperspell/node-sdk/commit/bef38187fbabc7b1d251ac453d4ce39713d5a5d3))
* **api:** update via SDK Studio ([032db7c](https://github.com/hyperspell/node-sdk/commit/032db7c699840bae6e4b4c952091d8d6bbbb3a08))
* **api:** update via SDK Studio ([7b3a297](https://github.com/hyperspell/node-sdk/commit/7b3a297614bffc729105cd75151a1c7df255fd59))
* **api:** update via SDK Studio ([b411129](https://github.com/hyperspell/node-sdk/commit/b41112960489ea077a9656f80f4436fbbae006b6))
* **api:** update via SDK Studio ([d96b74c](https://github.com/hyperspell/node-sdk/commit/d96b74c0b31fc76e5ad3fb2382ad615c505b4b41))
* **api:** update via SDK Studio ([bbb4650](https://github.com/hyperspell/node-sdk/commit/bbb4650d17f6ec312e2b51bca152881c96577775))
* **api:** update via SDK Studio ([1fc55d0](https://github.com/hyperspell/node-sdk/commit/1fc55d011194539566ca8ec2f9cf6ff1e7aba952))
* **api:** update via SDK Studio ([#38](https://github.com/hyperspell/node-sdk/issues/38)) ([61373c8](https://github.com/hyperspell/node-sdk/commit/61373c843629c169d69c4dd133d5b3a9899a230f))
* **api:** update via SDK Studio ([#39](https://github.com/hyperspell/node-sdk/issues/39)) ([a0ce99a](https://github.com/hyperspell/node-sdk/commit/a0ce99aae41fa41ad8bde420f00870ce647ff5d1))
* **api:** update via SDK Studio ([#40](https://github.com/hyperspell/node-sdk/issues/40)) ([5614b84](https://github.com/hyperspell/node-sdk/commit/5614b84d9d2f34d59ba1b61dc43dd7ce4a143d3a))
* **api:** update via SDK Studio ([#41](https://github.com/hyperspell/node-sdk/issues/41)) ([6f9da54](https://github.com/hyperspell/node-sdk/commit/6f9da54a9104bbaab340cfb230f4217fdc8ec4ed))
* **api:** update via SDK Studio ([#43](https://github.com/hyperspell/node-sdk/issues/43)) ([588ad3b](https://github.com/hyperspell/node-sdk/commit/588ad3b6267ca1509e01babedaa2ff89c830bbc0))
* clean up environment call outs ([e00b465](https://github.com/hyperspell/node-sdk/commit/e00b4654310a448eab3ac280c7b248d27f5125a6))
* **client:** accept RFC6838 JSON content types ([#33](https://github.com/hyperspell/node-sdk/issues/33)) ([ca38adc](https://github.com/hyperspell/node-sdk/commit/ca38adc6b3125f68d682462e42f7c79ac0d65da1))
* **client:** add support for endpoint-specific base URLs ([41c9568](https://github.com/hyperspell/node-sdk/commit/41c95688af490efd90cf8019b62a1b52cfb99b3e))
* **mcp:** add code execution tool ([a6ce72c](https://github.com/hyperspell/node-sdk/commit/a6ce72c662426acdb4a3c1ffa8108ba8dd82bfd1))
* **mcp:** add detail field to docs search tool ([cf35c13](https://github.com/hyperspell/node-sdk/commit/cf35c137e638bc92ae2182e63f0017be7f9566de))
* **mcp:** add docs search tool ([10acf03](https://github.com/hyperspell/node-sdk/commit/10acf039fc6a74c4bcd471d83f4b88662b3e7150))
* **mcp:** add logging when environment variable is set ([485c9fa](https://github.com/hyperspell/node-sdk/commit/485c9fa74d39fbd9d81f0c95f821f4dec4c2c041))
* **mcp:** add mcp bundles to build script ([4da8c44](https://github.com/hyperspell/node-sdk/commit/4da8c445db5c01f324385b1f3bae6e4f83eb45e3))
* **mcp:** add option for including docs tools ([0f3a7c4](https://github.com/hyperspell/node-sdk/commit/0f3a7c4505c7ba72e2ac5ee59c88af0fd1572b8e))
* **mcp:** add option to infer mcp client ([894f4b2](https://github.com/hyperspell/node-sdk/commit/894f4b21d8e12293920f82a53ba45309995f0947))
* **mcp:** add typescript check to code execution tool ([b231e21](https://github.com/hyperspell/node-sdk/commit/b231e216f2e90760aa88ef2cfba2436552c189bd))
* **mcp:** allow setting logging level ([7c6125e](https://github.com/hyperspell/node-sdk/commit/7c6125ed687755523179a25fbd21b596d3a7740a))
* **mcp:** enable experimental docs search tool ([9c03500](https://github.com/hyperspell/node-sdk/commit/9c03500aecdc0f6c1936fa06167e9fbec8a5e752))
* **mcp:** enable optional code execution tool on http mcp servers ([ff85254](https://github.com/hyperspell/node-sdk/commit/ff8525482d4aa5302cd48bf8cf02031d7a4b6000))
* **mcp:** expose client options in `streamableHTTPApp` ([eadc59d](https://github.com/hyperspell/node-sdk/commit/eadc59d61aef6bc8a76a44ccda36916112c8dbf1))
* **mcp:** handle code mode calls in the Stainless API ([3a2143c](https://github.com/hyperspell/node-sdk/commit/3a2143c50929e03cd2b567f6999e7879e3fae416))
* **mcp:** parse query string as mcp client options in mcp server ([20a21ab](https://github.com/hyperspell/node-sdk/commit/20a21aba99384d1e078fefeebf355bb9dc6e61d2))
* **mcp:** return logs on code tool errors ([d6e5cb6](https://github.com/hyperspell/node-sdk/commit/d6e5cb602de9c02a1f201fde2c328b6206f57e93))
* **mcp:** support filtering tool results by a jq expression ([c4b5326](https://github.com/hyperspell/node-sdk/commit/c4b5326132e4781c53c6fc65e7f22d2b54dd508f))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#51](https://github.com/hyperspell/node-sdk/issues/51)) ([bd6cc31](https://github.com/hyperspell/node-sdk/commit/bd6cc31121c57380fca8088bd569f7c79b93164c))
* avoid type error in certain environments ([#37](https://github.com/hyperspell/node-sdk/issues/37)) ([42542b9](https://github.com/hyperspell/node-sdk/commit/42542b91e05ae3543112c21eae0c110158b753e5))
* **build:** bump node version in CI build to 20 to be compatible with MCP package ([676d63e](https://github.com/hyperspell/node-sdk/commit/676d63e0ede567d30d003fbfd574c90c3a0fb19c))
* **ci:** release-doctor — report correct token name ([1295850](https://github.com/hyperspell/node-sdk/commit/1295850e14526b98d4827447da95d298fb217583))
* **ci:** set permissions for DXT publish action ([084bcd4](https://github.com/hyperspell/node-sdk/commit/084bcd478179851b966355697c8d89df68219748))
* **client:** don't send `Content-Type` for bodyless methods ([9309eaf](https://github.com/hyperspell/node-sdk/commit/9309eaffdacdb289995889ebf1323d8353340386))
* **client:** send `X-Stainless-Timeout` in seconds ([#48](https://github.com/hyperspell/node-sdk/issues/48)) ([ed30b4c](https://github.com/hyperspell/node-sdk/commit/ed30b4c0c4c8802c1ecc999b8d628ab16b81ce82))
* coerce nullable values to undefined ([b35b4c3](https://github.com/hyperspell/node-sdk/commit/b35b4c38b746074d970556586410972ffe1d833e))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#47](https://github.com/hyperspell/node-sdk/issues/47)) ([f4a35e1](https://github.com/hyperspell/node-sdk/commit/f4a35e10b5a6fd2ef6a092643a64a0ddbf485c2f))
* **mcp:** add client instantiation options to code tool ([709c887](https://github.com/hyperspell/node-sdk/commit/709c8871db1fb9e1a0016920405f0bea3bfe824a))
* **mcp:** avoid sending `jq_filter` to base API ([d9af33a](https://github.com/hyperspell/node-sdk/commit/d9af33af4bdbc4a8d32a6d1f211c28b24ab3c5b8))
* **mcpb:** pin @anthropic-ai/mcpb version ([0cc695d](https://github.com/hyperspell/node-sdk/commit/0cc695dae9610ca65274cf68ef2df36d3ca3e916))
* **mcp:** correct code tool API endpoint ([112858e](https://github.com/hyperspell/node-sdk/commit/112858e1ba646dacfba5c5b54005446e099b8b3a))
* **mcp:** fix cli argument parsing logic ([17127d2](https://github.com/hyperspell/node-sdk/commit/17127d262e5a4a7ee24aa26e05269a1663afa851))
* **mcp:** fix query options parsing ([3de2bd2](https://github.com/hyperspell/node-sdk/commit/3de2bd21186ebfba24de0268f15294d78597e92b))
* **mcp:** fix tool description of jq_filter ([8c1503c](https://github.com/hyperspell/node-sdk/commit/8c1503c4a348c78f11633b16296450fd8611355d))
* **mcp:** fix uploading dxt release assets ([219b304](https://github.com/hyperspell/node-sdk/commit/219b3046aa8e0e9954f8941083f955563d7f01ce))
* **mcp:** include required section for top-level properties and support naming transformations ([36ae37a](https://github.com/hyperspell/node-sdk/commit/36ae37a714ae033b6e1afa6e58659d36103025d0))
* **mcp:** relax input type for asTextContextResult ([dea08b8](https://github.com/hyperspell/node-sdk/commit/dea08b8a889f6de17e5d9998a048413ca64de701))
* **mcp:** remove unused tools.ts ([#52](https://github.com/hyperspell/node-sdk/issues/52)) ([81d6ccd](https://github.com/hyperspell/node-sdk/commit/81d6ccd257f8a29c226a8885fe5120c721ba2a66))
* **mcp:** return correct lines on typescript errors ([fdb85a3](https://github.com/hyperspell/node-sdk/commit/fdb85a33236c75a7eca373dd93b48a20f33f2138))
* **mcp:** return tool execution error on api error ([4915976](https://github.com/hyperspell/node-sdk/commit/4915976152ec69434cbd7f1a01fa294e7cbf84be))
* **mcp:** return tool execution error on jq failure ([655e2be](https://github.com/hyperspell/node-sdk/commit/655e2be3e052079f91706a8ed75a08e4762505bc))
* **mcp:** reverse validJson capability option and limit scope ([357c3cc](https://github.com/hyperspell/node-sdk/commit/357c3cc81c306595fc2a28365133609e9833d35d))
* **mcp:** support jq filtering on cloudflare workers ([00f8fa1](https://github.com/hyperspell/node-sdk/commit/00f8fa1e38ea13528e5ec85b349ad1a42cd58adf))
* publish script — handle NPM errors correctly ([b69fab6](https://github.com/hyperspell/node-sdk/commit/b69fab6cd8fedb0ae57a885b2e86715b8b9df3ba))


### Performance Improvements

* faster formatting ([6f5c026](https://github.com/hyperspell/node-sdk/commit/6f5c02658215e04e11a8ef297508e743b1e89e60))


### Chores

* ci build action ([6354b4b](https://github.com/hyperspell/node-sdk/commit/6354b4b5d34f57f19cedb66b87618a397ab950cc))
* **ci:** add timeout thresholds for CI jobs ([b0a9540](https://github.com/hyperspell/node-sdk/commit/b0a95401a7cffc8b4a460926d68943e9f355c925))
* **ci:** bump node version for release workflows ([ec832be](https://github.com/hyperspell/node-sdk/commit/ec832be086586fdd36081ef92c8d05711b7aef96))
* **ci:** enable for pull requests ([a326896](https://github.com/hyperspell/node-sdk/commit/a326896ffcebabc961ab6df118623fe57113459b))
* **ci:** only run for pushes and fork pull requests ([2a758c8](https://github.com/hyperspell/node-sdk/commit/2a758c8b7211de130f2287d9ceb2ffb51b926a78))
* **ci:** only use depot for staging repos ([a39159d](https://github.com/hyperspell/node-sdk/commit/a39159da3134e1b5cbd5e47d39b8ce24c0f0d1be))
* **client:** fix logger property type ([a7d5b47](https://github.com/hyperspell/node-sdk/commit/a7d5b4702540a0c945681205e85f9fefd906503d))
* **client:** minor internal fixes ([ad7b9c1](https://github.com/hyperspell/node-sdk/commit/ad7b9c1fe80a8c1e866bcc5fac0172f26b4d8330))
* **codegen:** internal codegen update ([2faa68b](https://github.com/hyperspell/node-sdk/commit/2faa68be102b2be07fb2aab6f1de5c66941436ee))
* configure new SDK language ([8c13384](https://github.com/hyperspell/node-sdk/commit/8c13384ed9565c850e8c732bc83da96f3f73671d))
* do not install brew dependencies in ./scripts/bootstrap by default ([1b8c5a6](https://github.com/hyperspell/node-sdk/commit/1b8c5a6b892e185b8ec0953aa8faf697c62c3a22))
* **docs:** add missing deprecation warnings ([32486cc](https://github.com/hyperspell/node-sdk/commit/32486ccb3b493dc7e68f7681c4c1ba5054a9cd63))
* **docs:** grammar improvements ([66e2a3d](https://github.com/hyperspell/node-sdk/commit/66e2a3d1d316adea94ccf9ebf6658b81b0e0a7f3))
* **docs:** use top-level-await in example snippets ([9dba44a](https://github.com/hyperspell/node-sdk/commit/9dba44a45ccc28f2ac366eb6b50de4c0cb933b06))
* **exports:** cleaner resource index imports ([#35](https://github.com/hyperspell/node-sdk/issues/35)) ([641f5b3](https://github.com/hyperspell/node-sdk/commit/641f5b3a2311b4db0c16d4555e6073a502c94226))
* **exports:** stop using path fallbacks ([#36](https://github.com/hyperspell/node-sdk/issues/36)) ([801d961](https://github.com/hyperspell/node-sdk/commit/801d961baa29194a1ecc3656305297e893fb2bb0))
* extract some types in mcp docs ([8b71433](https://github.com/hyperspell/node-sdk/commit/8b714338109b7592b85b5c246c5b6824daf4df86))
* improve publish-npm script --latest tag logic ([55d7d43](https://github.com/hyperspell/node-sdk/commit/55d7d438e1a910e3ef773b95f9e1a4038b130353))
* **internal:** add aliases for Record and Array ([#49](https://github.com/hyperspell/node-sdk/issues/49)) ([680264c](https://github.com/hyperspell/node-sdk/commit/680264c480dda059684bfcff5637f6402b49a278))
* **internal:** codegen related update ([946f9c0](https://github.com/hyperspell/node-sdk/commit/946f9c0d9597be1ea124a319d4e4b281e9a9ca4e))
* **internal:** codegen related update ([cf41b0b](https://github.com/hyperspell/node-sdk/commit/cf41b0b2abb639ca38876cb3074bdf07137f6b3e))
* **internal:** codegen related update ([a153712](https://github.com/hyperspell/node-sdk/commit/a153712bdb29a43fc8ecde9ea1f75280c9a24a83))
* **internal:** codegen related update ([4458148](https://github.com/hyperspell/node-sdk/commit/445814833de0a9d998d83ae86766e67eb7a4ff1d))
* **internal:** codegen related update ([5c370c8](https://github.com/hyperspell/node-sdk/commit/5c370c8d8c2c1b8bae44bd23cac864dd3a1d36cb))
* **internal:** codegen related update ([1ba814f](https://github.com/hyperspell/node-sdk/commit/1ba814f24f3e2e4bbcc54b8f036e11755d540be1))
* **internal:** codegen related update ([fd51bf2](https://github.com/hyperspell/node-sdk/commit/fd51bf2ea88352990d3a4c60182bd2b1b5571e13))
* **internal:** codegen related update ([154fa23](https://github.com/hyperspell/node-sdk/commit/154fa230cc131a9ef6fe4522b30e5d2e139de015))
* **internal:** codegen related update ([cce85c1](https://github.com/hyperspell/node-sdk/commit/cce85c181ddd14b51bdfd4018892aea9088fee33))
* **internal:** codegen related update ([1b783b9](https://github.com/hyperspell/node-sdk/commit/1b783b9a68c97640b47efd34b8aa75f8505314e0))
* **internal:** codegen related update ([a9e0f53](https://github.com/hyperspell/node-sdk/commit/a9e0f534d3ae80b5cf2befc376ad240b58fe940c))
* **internal:** codegen related update ([c044268](https://github.com/hyperspell/node-sdk/commit/c044268dcbd4cf5be42fa77a28731b5921847aa4))
* **internal:** codegen related update ([#31](https://github.com/hyperspell/node-sdk/issues/31)) ([2b286c1](https://github.com/hyperspell/node-sdk/commit/2b286c14f6545cfaf65259fabc051c40dbe336e7))
* **internal:** configure MCP Server hosting ([0d3562f](https://github.com/hyperspell/node-sdk/commit/0d3562f9b7b788f1da7c2f129eee1643c30f841f))
* **internal:** fix incremental formatting in some cases ([77ebc1a](https://github.com/hyperspell/node-sdk/commit/77ebc1a884d18ab002ed9e669d9ffa5282d56f59))
* **internal:** formatting change ([f3c1d11](https://github.com/hyperspell/node-sdk/commit/f3c1d1173edefbf8c3d4cf9796769a7f742f7501))
* **internal:** gitignore .mcpb files ([ae5b458](https://github.com/hyperspell/node-sdk/commit/ae5b458a2da988fa6e2026b366e604b9066b8685))
* **internal:** grammar fix (it's -&gt; its) ([4fa00ab](https://github.com/hyperspell/node-sdk/commit/4fa00ab305ecff5d06cc6038a10d7fa1f3e73c28))
* **internal:** ignore .eslintcache ([81f7064](https://github.com/hyperspell/node-sdk/commit/81f7064dab38fcad4cc9f0bd742bf4746135d6e9))
* **internal:** make base APIResource abstract ([65f20d3](https://github.com/hyperspell/node-sdk/commit/65f20d34a4bd8349d7570924d675f56ae8bdbdda))
* **internal:** make mcp-server publishing public by defaut ([39d38e3](https://github.com/hyperspell/node-sdk/commit/39d38e323339dbbe3b6967c3f3a645b4695e8a46))
* **internal:** reduce CI branch coverage ([230a7e0](https://github.com/hyperspell/node-sdk/commit/230a7e040ced22028266e6caf812724fdd2818e3))
* **internal:** refactor array check ([2543d11](https://github.com/hyperspell/node-sdk/commit/2543d1138bffda3ef5611d9e60abf0779d13493c))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([3dd1a02](https://github.com/hyperspell/node-sdk/commit/3dd1a0274494602107a1346daf300780f975fbee))
* **internal:** remove extra empty newlines ([#34](https://github.com/hyperspell/node-sdk/issues/34)) ([3677c0c](https://github.com/hyperspell/node-sdk/commit/3677c0c5673c2f49e7f37072be45aad49f1ee5d6))
* **internal:** remove redundant imports config ([73fa6ee](https://github.com/hyperspell/node-sdk/commit/73fa6ee36b6283e56df2520f9112837f3c4f427f))
* **internal:** upgrade eslint ([5e16246](https://github.com/hyperspell/node-sdk/commit/5e16246b8d9ac8c4de70fc9a9ce8e96000e8e29c))
* **internal:** upload builds and expand CI branch coverage ([9c9f933](https://github.com/hyperspell/node-sdk/commit/9c9f933f203a26408ce4b4ef0bedffe5cdce1ad6))
* **internal:** use npm pack for build uploads ([d74b3a8](https://github.com/hyperspell/node-sdk/commit/d74b3a81e79e086acf21b54628a4734186f2e3b3))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([bd7cfe1](https://github.com/hyperspell/node-sdk/commit/bd7cfe1a038054fea4f300680f4a7e0b057c554c))
* make some internal functions async ([e5a5551](https://github.com/hyperspell/node-sdk/commit/e5a555192685f17fc6a0024e820aef1caf907420))
* mcp code tool explicit error message when missing a run function ([8d95acd](https://github.com/hyperspell/node-sdk/commit/8d95acd5117d4fde7441236d0a78d0ec2fdab39e))
* **mcp:** add cors to oauth metadata route ([911cc5f](https://github.com/hyperspell/node-sdk/commit/911cc5f81c225050e518ade02a9c3d790261ba38))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([98d995c](https://github.com/hyperspell/node-sdk/commit/98d995cba7a5e09ffbd161d302889d604cd8e938))
* **mcp:** add line numbers to code tool errors ([e51e239](https://github.com/hyperspell/node-sdk/commit/e51e23911aa0edcc7bc9c282bbe5984dce7cd462))
* **mcp:** allow pointing `docs_search` tool at other URLs ([5fcaf45](https://github.com/hyperspell/node-sdk/commit/5fcaf459a8600f1d85c55f046c3f36d28db4db56))
* **mcp:** clarify http auth error ([5d7dd6b](https://github.com/hyperspell/node-sdk/commit/5d7dd6b32315f9606559981afc19b9980d1ab192))
* **mcp:** formatting ([7e8f571](https://github.com/hyperspell/node-sdk/commit/7e8f5714098860d0e7759ae0571c13eb51ce284c))
* **mcp:** rename dxt to mcpb ([c88e7ad](https://github.com/hyperspell/node-sdk/commit/c88e7ad20f2f29ccc4438bac787e8ac00479b2a0))
* **mcp:** rework imports in tools ([88946b8](https://github.com/hyperspell/node-sdk/commit/88946b875abebe36b6f50c81b1719183c0feadaa))
* **mcp:** update lockfile ([331bcf0](https://github.com/hyperspell/node-sdk/commit/331bcf0a6549863eafdc6b8b6f5be15006b3a573))
* **mcp:** update package.json ([100d24b](https://github.com/hyperspell/node-sdk/commit/100d24b0759553ba5fe1327e898b338c16f771b3))
* **mcp:** update README ([ec5d660](https://github.com/hyperspell/node-sdk/commit/ec5d66006ee59b9207f8dc6e42384beec37229df))
* **mcp:** update types ([76b2384](https://github.com/hyperspell/node-sdk/commit/76b2384e724984cdebb554d0196e8caebecc3621))
* **mcp:** upgrade jq-web ([8108ed1](https://github.com/hyperspell/node-sdk/commit/8108ed10ce7e1b09b3fc310c9849342fc1f1e820))
* **mcp:** upload dxt as release asset ([8b6ec67](https://github.com/hyperspell/node-sdk/commit/8b6ec67f32a73b8ac79ec075e9c72e3ce71d4eef))
* mention unit type in timeout docs ([8b1f715](https://github.com/hyperspell/node-sdk/commit/8b1f715719b0258460adb86d435c062642afe603))
* remove custom code ([3f8d5c9](https://github.com/hyperspell/node-sdk/commit/3f8d5c90502eecaaff63c4f656dce2441eb1cadf))
* update CI script ([cb357d6](https://github.com/hyperspell/node-sdk/commit/cb357d6b9ff4a9d8607be445bc3c23ed56595db8))
* use latest @modelcontextprotocol/sdk ([7b5bab4](https://github.com/hyperspell/node-sdk/commit/7b5bab4d3494be28e98de645109c2016a137653f))
* use structured error when code execution tool errors ([d4b9589](https://github.com/hyperspell/node-sdk/commit/d4b95895fe47ec817bb6b2863c6da859f0b9fb48))


### Documentation

* add examples to tsdocs ([35758b5](https://github.com/hyperspell/node-sdk/commit/35758b5425045930db8766fe1fabc2cc80039766))
* **mcp:** add a README button for one-click add to Cursor ([f8da367](https://github.com/hyperspell/node-sdk/commit/f8da3673fd563fcd44b5df6dc99927a95ed7be02))
* **mcp:** add a README link to add server to VS Code or Claude Code ([c020fbc](https://github.com/hyperspell/node-sdk/commit/c020fbc656e4438c9a36977eaaea23fb475f6481))
* **readme:** fix typo ([b3c1a53](https://github.com/hyperspell/node-sdk/commit/b3c1a539678787c6b7d6d89aa4d32dc2be0b6f87))


### Refactors

* **types:** replace Record with mapped types ([9eeba1f](https://github.com/hyperspell/node-sdk/commit/9eeba1fd8c68e19ae8235ea47f1bbf384cb77281))

## 0.27.0 (2025-12-12)

Full Changelog: [v0.26.0...v0.27.0](https://github.com/hyperspell/node-sdk/compare/v0.26.0...v0.27.0)

### Features

* **api:** api update ([56eac47](https://github.com/hyperspell/node-sdk/commit/56eac4744ace31b95ad81d614b2b6165e78ef463))
* **api:** api update ([c1fb3c4](https://github.com/hyperspell/node-sdk/commit/c1fb3c4aafa35d7806fb58921f2c13b2b700ad4b))
* **api:** api update ([c3c4b7e](https://github.com/hyperspell/node-sdk/commit/c3c4b7e298142c9921db702fc88893573f5f8c5b))
* **api:** api update ([9191f0a](https://github.com/hyperspell/node-sdk/commit/9191f0afb4ed3046be3140a157501c6125ec9126))
* **api:** api update ([5ccc509](https://github.com/hyperspell/node-sdk/commit/5ccc50944b5d6f712d8329f1d3695a64cdfbcb10))
* **api:** update via SDK Studio ([0605f55](https://github.com/hyperspell/node-sdk/commit/0605f55ba71434e411d25162302742b65f469d1e))
* **api:** update via SDK Studio ([4d42a43](https://github.com/hyperspell/node-sdk/commit/4d42a43e41a6c5025d556248b20ab2b67b488902))
* **api:** update via SDK Studio ([c3a9f7b](https://github.com/hyperspell/node-sdk/commit/c3a9f7ba14118b8270f3a64d583a6bb11776d17e))
* **api:** update via SDK Studio ([8a17972](https://github.com/hyperspell/node-sdk/commit/8a179727d98ee9af7110bb5cebe7e07ac6c7cdcb))
* **mcp:** add detail field to docs search tool ([cf35c13](https://github.com/hyperspell/node-sdk/commit/cf35c137e638bc92ae2182e63f0017be7f9566de))
* **mcp:** add typescript check to code execution tool ([b231e21](https://github.com/hyperspell/node-sdk/commit/b231e216f2e90760aa88ef2cfba2436552c189bd))
* **mcp:** enable optional code execution tool on http mcp servers ([ff85254](https://github.com/hyperspell/node-sdk/commit/ff8525482d4aa5302cd48bf8cf02031d7a4b6000))
* **mcp:** handle code mode calls in the Stainless API ([3a2143c](https://github.com/hyperspell/node-sdk/commit/3a2143c50929e03cd2b567f6999e7879e3fae416))
* **mcp:** return logs on code tool errors ([d6e5cb6](https://github.com/hyperspell/node-sdk/commit/d6e5cb602de9c02a1f201fde2c328b6206f57e93))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([709c887](https://github.com/hyperspell/node-sdk/commit/709c8871db1fb9e1a0016920405f0bea3bfe824a))
* **mcpb:** pin @anthropic-ai/mcpb version ([0cc695d](https://github.com/hyperspell/node-sdk/commit/0cc695dae9610ca65274cf68ef2df36d3ca3e916))
* **mcp:** correct code tool API endpoint ([112858e](https://github.com/hyperspell/node-sdk/commit/112858e1ba646dacfba5c5b54005446e099b8b3a))
* **mcp:** return correct lines on typescript errors ([fdb85a3](https://github.com/hyperspell/node-sdk/commit/fdb85a33236c75a7eca373dd93b48a20f33f2138))
* **mcp:** return tool execution error on api error ([4915976](https://github.com/hyperspell/node-sdk/commit/4915976152ec69434cbd7f1a01fa294e7cbf84be))
* **mcp:** return tool execution error on jq failure ([655e2be](https://github.com/hyperspell/node-sdk/commit/655e2be3e052079f91706a8ed75a08e4762505bc))


### Chores

* **client:** fix logger property type ([a7d5b47](https://github.com/hyperspell/node-sdk/commit/a7d5b4702540a0c945681205e85f9fefd906503d))
* **internal:** codegen related update ([946f9c0](https://github.com/hyperspell/node-sdk/commit/946f9c0d9597be1ea124a319d4e4b281e9a9ca4e))
* **internal:** codegen related update ([cf41b0b](https://github.com/hyperspell/node-sdk/commit/cf41b0b2abb639ca38876cb3074bdf07137f6b3e))
* **internal:** codegen related update ([a153712](https://github.com/hyperspell/node-sdk/commit/a153712bdb29a43fc8ecde9ea1f75280c9a24a83))
* **internal:** codegen related update ([4458148](https://github.com/hyperspell/node-sdk/commit/445814833de0a9d998d83ae86766e67eb7a4ff1d))
* **internal:** grammar fix (it's -&gt; its) ([4fa00ab](https://github.com/hyperspell/node-sdk/commit/4fa00ab305ecff5d06cc6038a10d7fa1f3e73c28))
* **internal:** upgrade eslint ([5e16246](https://github.com/hyperspell/node-sdk/commit/5e16246b8d9ac8c4de70fc9a9ce8e96000e8e29c))
* mcp code tool explicit error message when missing a run function ([8d95acd](https://github.com/hyperspell/node-sdk/commit/8d95acd5117d4fde7441236d0a78d0ec2fdab39e))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([98d995c](https://github.com/hyperspell/node-sdk/commit/98d995cba7a5e09ffbd161d302889d604cd8e938))
* **mcp:** add line numbers to code tool errors ([e51e239](https://github.com/hyperspell/node-sdk/commit/e51e23911aa0edcc7bc9c282bbe5984dce7cd462))
* **mcp:** clarify http auth error ([5d7dd6b](https://github.com/hyperspell/node-sdk/commit/5d7dd6b32315f9606559981afc19b9980d1ab192))
* **mcp:** update lockfile ([331bcf0](https://github.com/hyperspell/node-sdk/commit/331bcf0a6549863eafdc6b8b6f5be15006b3a573))
* **mcp:** upgrade jq-web ([8108ed1](https://github.com/hyperspell/node-sdk/commit/8108ed10ce7e1b09b3fc310c9849342fc1f1e820))
* use latest @modelcontextprotocol/sdk ([7b5bab4](https://github.com/hyperspell/node-sdk/commit/7b5bab4d3494be28e98de645109c2016a137653f))
* use structured error when code execution tool errors ([d4b9589](https://github.com/hyperspell/node-sdk/commit/d4b95895fe47ec817bb6b2863c6da859f0b9fb48))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([f8da367](https://github.com/hyperspell/node-sdk/commit/f8da3673fd563fcd44b5df6dc99927a95ed7be02))
* **mcp:** add a README link to add server to VS Code or Claude Code ([c020fbc](https://github.com/hyperspell/node-sdk/commit/c020fbc656e4438c9a36977eaaea23fb475f6481))

## 0.26.0 (2025-10-14)

Full Changelog: [v0.25.1...v0.26.0](https://github.com/hyperspell/node-sdk/compare/v0.25.1...v0.26.0)

### Features

* **api:** api update ([0464e87](https://github.com/hyperspell/node-sdk/commit/0464e871864b48f1514048c90539fe7063388f23))
* **api:** api update ([6ace937](https://github.com/hyperspell/node-sdk/commit/6ace937814906a2423a4d318eb33205f2afd1064))
* **api:** update via SDK Studio ([3ef6c75](https://github.com/hyperspell/node-sdk/commit/3ef6c7512ec64bdf10fa5eb3dac03e1d79e14c0c))
* **api:** update via SDK Studio ([5e25f7e](https://github.com/hyperspell/node-sdk/commit/5e25f7ed123b3de40d0796c3c8776113239997cb))
* **api:** update via SDK Studio ([37393f3](https://github.com/hyperspell/node-sdk/commit/37393f31fe9dea374bbeda1947a668c028f9ccc2))
* **api:** update via SDK Studio ([0559897](https://github.com/hyperspell/node-sdk/commit/05598978d35144f03b54d1133c54a32f37c461c4))


### Bug Fixes

* **mcp:** fix cli argument parsing logic ([17127d2](https://github.com/hyperspell/node-sdk/commit/17127d262e5a4a7ee24aa26e05269a1663afa851))


### Chores

* extract some types in mcp docs ([8b71433](https://github.com/hyperspell/node-sdk/commit/8b714338109b7592b85b5c246c5b6824daf4df86))
* **internal:** codegen related update ([5c370c8](https://github.com/hyperspell/node-sdk/commit/5c370c8d8c2c1b8bae44bd23cac864dd3a1d36cb))
* **internal:** use npm pack for build uploads ([d74b3a8](https://github.com/hyperspell/node-sdk/commit/d74b3a81e79e086acf21b54628a4734186f2e3b3))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([bd7cfe1](https://github.com/hyperspell/node-sdk/commit/bd7cfe1a038054fea4f300680f4a7e0b057c554c))

## 0.25.1 (2025-09-29)

Full Changelog: [v0.25.0...v0.25.1](https://github.com/hyperspell/node-sdk/compare/v0.25.0...v0.25.1)

### Features

* **api:** update via SDK Studio ([0f61cb8](https://github.com/hyperspell/node-sdk/commit/0f61cb849a57724d22c75ccc531a70b2b3eb7c4a))

## 0.25.0 (2025-09-29)

Full Changelog: [v0.24.0...v0.25.0](https://github.com/hyperspell/node-sdk/compare/v0.24.0...v0.25.0)

### Features

* **api:** api update ([0b2d638](https://github.com/hyperspell/node-sdk/commit/0b2d6387d4eeeac28e45d95b02a84607ee0de293))

## 0.24.0 (2025-09-29)

Full Changelog: [v0.22.1...v0.24.0](https://github.com/hyperspell/node-sdk/compare/v0.22.1...v0.24.0)

### Features

* **api:** api update ([b6c7bb7](https://github.com/hyperspell/node-sdk/commit/b6c7bb738aef3ad53d711ce3bfec17d3a49dfa8b))
* **api:** api update ([b57fed4](https://github.com/hyperspell/node-sdk/commit/b57fed43958e7990952357edd7ba74ba174b5c3e))
* **api:** api update ([63f3df5](https://github.com/hyperspell/node-sdk/commit/63f3df5f3714cb4b2d3d4ea6267e5f075cfebd2c))
* **api:** api update ([f052117](https://github.com/hyperspell/node-sdk/commit/f0521175118624ad93fca9499d7c8d557edcc5a5))
* **api:** api update ([c7b3bb7](https://github.com/hyperspell/node-sdk/commit/c7b3bb73249c40bbb92904caf2b4059ae1dba0e3))
* **api:** api update ([809fb16](https://github.com/hyperspell/node-sdk/commit/809fb16627ea2835330dc6041a3f0f59caf6cf18))
* **api:** api update ([e30bf2f](https://github.com/hyperspell/node-sdk/commit/e30bf2fe5e09d8f2140d7494876e069736f6abca))
* **api:** update via SDK Studio ([e710403](https://github.com/hyperspell/node-sdk/commit/e710403e8a47a9ee170d896a7a61194f29274b45))
* **api:** update via SDK Studio ([baa723d](https://github.com/hyperspell/node-sdk/commit/baa723d44c73dce341458bdf3084e99ca71dfafa))
* **api:** update via SDK Studio ([31fdcab](https://github.com/hyperspell/node-sdk/commit/31fdcabd1455b9b8471172e0f8e185659020c333))
* **api:** update via SDK Studio ([2acfdcc](https://github.com/hyperspell/node-sdk/commit/2acfdcc68ce8c7cc560e8d12b8ce27b3189036d4))
* **api:** update via SDK Studio ([51f48ee](https://github.com/hyperspell/node-sdk/commit/51f48eecc66cc573ef99f23aa641beaab106f908))
* **api:** update via SDK Studio ([12e3a88](https://github.com/hyperspell/node-sdk/commit/12e3a88e20256aba33c33d12328982d7c1f8df67))
* **api:** update via SDK Studio ([d79a97a](https://github.com/hyperspell/node-sdk/commit/d79a97a82e1b19e3446984d78a64ac47ce7877cf))
* **api:** update via SDK Studio ([fcf51e3](https://github.com/hyperspell/node-sdk/commit/fcf51e3b76c517c6fd7dc1d68156a9b3eb0babc4))
* **mcp:** add code execution tool ([a6ce72c](https://github.com/hyperspell/node-sdk/commit/a6ce72c662426acdb4a3c1ffa8108ba8dd82bfd1))
* **mcp:** add docs search tool ([10acf03](https://github.com/hyperspell/node-sdk/commit/10acf039fc6a74c4bcd471d83f4b88662b3e7150))
* **mcp:** add mcp bundles to build script ([4da8c44](https://github.com/hyperspell/node-sdk/commit/4da8c445db5c01f324385b1f3bae6e4f83eb45e3))
* **mcp:** add option for including docs tools ([0f3a7c4](https://github.com/hyperspell/node-sdk/commit/0f3a7c4505c7ba72e2ac5ee59c88af0fd1572b8e))
* **mcp:** add option to infer mcp client ([894f4b2](https://github.com/hyperspell/node-sdk/commit/894f4b21d8e12293920f82a53ba45309995f0947))
* **mcp:** allow setting logging level ([7c6125e](https://github.com/hyperspell/node-sdk/commit/7c6125ed687755523179a25fbd21b596d3a7740a))
* **mcp:** enable experimental docs search tool ([9c03500](https://github.com/hyperspell/node-sdk/commit/9c03500aecdc0f6c1936fa06167e9fbec8a5e752))
* **mcp:** expose client options in `streamableHTTPApp` ([eadc59d](https://github.com/hyperspell/node-sdk/commit/eadc59d61aef6bc8a76a44ccda36916112c8dbf1))
* **mcp:** parse query string as mcp client options in mcp server ([20a21ab](https://github.com/hyperspell/node-sdk/commit/20a21aba99384d1e078fefeebf355bb9dc6e61d2))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([084bcd4](https://github.com/hyperspell/node-sdk/commit/084bcd478179851b966355697c8d89df68219748))
* coerce nullable values to undefined ([b35b4c3](https://github.com/hyperspell/node-sdk/commit/b35b4c38b746074d970556586410972ffe1d833e))
* **mcp:** fix query options parsing ([3de2bd2](https://github.com/hyperspell/node-sdk/commit/3de2bd21186ebfba24de0268f15294d78597e92b))
* **mcp:** fix uploading dxt release assets ([219b304](https://github.com/hyperspell/node-sdk/commit/219b3046aa8e0e9954f8941083f955563d7f01ce))


### Performance Improvements

* faster formatting ([6f5c026](https://github.com/hyperspell/node-sdk/commit/6f5c02658215e04e11a8ef297508e743b1e89e60))


### Chores

* ci build action ([6354b4b](https://github.com/hyperspell/node-sdk/commit/6354b4b5d34f57f19cedb66b87618a397ab950cc))
* **codegen:** internal codegen update ([2faa68b](https://github.com/hyperspell/node-sdk/commit/2faa68be102b2be07fb2aab6f1de5c66941436ee))
* do not install brew dependencies in ./scripts/bootstrap by default ([1b8c5a6](https://github.com/hyperspell/node-sdk/commit/1b8c5a6b892e185b8ec0953aa8faf697c62c3a22))
* **internal:** codegen related update ([1ba814f](https://github.com/hyperspell/node-sdk/commit/1ba814f24f3e2e4bbcc54b8f036e11755d540be1))
* **internal:** codegen related update ([fd51bf2](https://github.com/hyperspell/node-sdk/commit/fd51bf2ea88352990d3a4c60182bd2b1b5571e13))
* **internal:** codegen related update ([154fa23](https://github.com/hyperspell/node-sdk/commit/154fa230cc131a9ef6fe4522b30e5d2e139de015))
* **internal:** codegen related update ([cce85c1](https://github.com/hyperspell/node-sdk/commit/cce85c181ddd14b51bdfd4018892aea9088fee33))
* **internal:** codegen related update ([1b783b9](https://github.com/hyperspell/node-sdk/commit/1b783b9a68c97640b47efd34b8aa75f8505314e0))
* **internal:** fix incremental formatting in some cases ([77ebc1a](https://github.com/hyperspell/node-sdk/commit/77ebc1a884d18ab002ed9e669d9ffa5282d56f59))
* **internal:** formatting change ([f3c1d11](https://github.com/hyperspell/node-sdk/commit/f3c1d1173edefbf8c3d4cf9796769a7f742f7501))
* **internal:** gitignore .mcpb files ([ae5b458](https://github.com/hyperspell/node-sdk/commit/ae5b458a2da988fa6e2026b366e604b9066b8685))
* **internal:** ignore .eslintcache ([81f7064](https://github.com/hyperspell/node-sdk/commit/81f7064dab38fcad4cc9f0bd742bf4746135d6e9))
* **internal:** make mcp-server publishing public by defaut ([39d38e3](https://github.com/hyperspell/node-sdk/commit/39d38e323339dbbe3b6967c3f3a645b4695e8a46))
* **internal:** refactor array check ([2543d11](https://github.com/hyperspell/node-sdk/commit/2543d1138bffda3ef5611d9e60abf0779d13493c))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([3dd1a02](https://github.com/hyperspell/node-sdk/commit/3dd1a0274494602107a1346daf300780f975fbee))
* **mcp:** add cors to oauth metadata route ([911cc5f](https://github.com/hyperspell/node-sdk/commit/911cc5f81c225050e518ade02a9c3d790261ba38))
* **mcp:** allow pointing `docs_search` tool at other URLs ([5fcaf45](https://github.com/hyperspell/node-sdk/commit/5fcaf459a8600f1d85c55f046c3f36d28db4db56))
* **mcp:** rename dxt to mcpb ([c88e7ad](https://github.com/hyperspell/node-sdk/commit/c88e7ad20f2f29ccc4438bac787e8ac00479b2a0))
* **mcp:** update package.json ([100d24b](https://github.com/hyperspell/node-sdk/commit/100d24b0759553ba5fe1327e898b338c16f771b3))
* **mcp:** update README ([ec5d660](https://github.com/hyperspell/node-sdk/commit/ec5d66006ee59b9207f8dc6e42384beec37229df))
* **mcp:** update types ([76b2384](https://github.com/hyperspell/node-sdk/commit/76b2384e724984cdebb554d0196e8caebecc3621))
* **mcp:** upload dxt as release asset ([8b6ec67](https://github.com/hyperspell/node-sdk/commit/8b6ec67f32a73b8ac79ec075e9c72e3ce71d4eef))
* update CI script ([cb357d6](https://github.com/hyperspell/node-sdk/commit/cb357d6b9ff4a9d8607be445bc3c23ed56595db8))

## 0.22.1 (2025-08-13)

Full Changelog: [v0.22.0...v0.22.1](https://github.com/hyperspell/node-sdk/compare/v0.22.0...v0.22.1)

### Features

* **api:** api update ([1ac38b9](https://github.com/hyperspell/node-sdk/commit/1ac38b97354a67581e7c78e4aff08b7daa6fde34))
* **api:** api update ([4b20565](https://github.com/hyperspell/node-sdk/commit/4b20565bb754222323cc83e45da404edba5177bf))

## 0.22.0 (2025-08-06)

Full Changelog: [v0.21.0...v0.22.0](https://github.com/hyperspell/node-sdk/compare/v0.21.0...v0.22.0)

### Features

* **api:** api update ([3d87ae2](https://github.com/hyperspell/node-sdk/commit/3d87ae2db325d2a7de840fcab5b753394285dd49))
* **api:** api update ([3632745](https://github.com/hyperspell/node-sdk/commit/3632745375399224f236fed1c13f8a17f22d1caa))
* **api:** update via SDK Studio ([d3f6e00](https://github.com/hyperspell/node-sdk/commit/d3f6e0000db4c7b50f99243260ca5b268216c2e5))
* **api:** update via SDK Studio ([439ed2a](https://github.com/hyperspell/node-sdk/commit/439ed2accc424c60e426898cf5400e5f3545ba75))

## 0.21.0 (2025-08-05)

Full Changelog: [v0.20.0...v0.21.0](https://github.com/hyperspell/node-sdk/compare/v0.20.0...v0.21.0)

### Features

* **api:** api update ([086f49d](https://github.com/hyperspell/node-sdk/commit/086f49d60602fcddd4a35288ffe69e0c622ff84d))
* **mcp:** add logging when environment variable is set ([485c9fa](https://github.com/hyperspell/node-sdk/commit/485c9fa74d39fbd9d81f0c95f821f4dec4c2c041))

## 0.20.0 (2025-08-01)

Full Changelog: [v0.19.0...v0.20.0](https://github.com/hyperspell/node-sdk/compare/v0.19.0...v0.20.0)

### Features

* **api:** api update ([cefe243](https://github.com/hyperspell/node-sdk/commit/cefe2431b9038f3571cf8d30cda35d06e50a6892))
* **api:** api update ([fd28af6](https://github.com/hyperspell/node-sdk/commit/fd28af6865428470f24aa3b74618bc7c285084a0))
* **api:** update via SDK Studio ([8262076](https://github.com/hyperspell/node-sdk/commit/8262076e98fe17a7638709e2c3a008e3ea4e3b3a))
* **api:** update via SDK Studio ([a90a5fe](https://github.com/hyperspell/node-sdk/commit/a90a5fea37a284c33b7c5a0f5920529795f5924f))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([d9af33a](https://github.com/hyperspell/node-sdk/commit/d9af33af4bdbc4a8d32a6d1f211c28b24ab3c5b8))
* **mcp:** fix tool description of jq_filter ([8c1503c](https://github.com/hyperspell/node-sdk/commit/8c1503c4a348c78f11633b16296450fd8611355d))
* **mcp:** reverse validJson capability option and limit scope ([357c3cc](https://github.com/hyperspell/node-sdk/commit/357c3cc81c306595fc2a28365133609e9833d35d))


### Chores

* **internal:** codegen related update ([a9e0f53](https://github.com/hyperspell/node-sdk/commit/a9e0f534d3ae80b5cf2befc376ad240b58fe940c))
* **internal:** remove redundant imports config ([73fa6ee](https://github.com/hyperspell/node-sdk/commit/73fa6ee36b6283e56df2520f9112837f3c4f427f))

## 0.19.0 (2025-07-18)

Full Changelog: [v0.18.2...v0.19.0](https://github.com/hyperspell/node-sdk/compare/v0.18.2...v0.19.0)

### Features

* **api:** api update ([144c520](https://github.com/hyperspell/node-sdk/commit/144c520a6950007b577d8572d0ed07fe77ccb6cb))
* **api:** api update ([4d199a6](https://github.com/hyperspell/node-sdk/commit/4d199a6a4d13acea6d602c7e6912b25ba8b69357))
* **api:** update via SDK Studio ([30795a9](https://github.com/hyperspell/node-sdk/commit/30795a9be8aeeff7d1215a6d0f76ce717bfc8fdb))
* **api:** update via SDK Studio ([7712189](https://github.com/hyperspell/node-sdk/commit/7712189845a7198eece8fb12d7752f1467c7ba78))
* **api:** update via SDK Studio ([5b7ad3a](https://github.com/hyperspell/node-sdk/commit/5b7ad3a4d90e8fe728c7c635de1ad1ff3e5b8a0a))
* clean up environment call outs ([e00b465](https://github.com/hyperspell/node-sdk/commit/e00b4654310a448eab3ac280c7b248d27f5125a6))
* **mcp:** support filtering tool results by a jq expression ([c4b5326](https://github.com/hyperspell/node-sdk/commit/c4b5326132e4781c53c6fc65e7f22d2b54dd508f))


### Bug Fixes

* **build:** bump node version in CI build to 20 to be compatible with MCP package ([676d63e](https://github.com/hyperspell/node-sdk/commit/676d63e0ede567d30d003fbfd574c90c3a0fb19c))
* **ci:** release-doctor — report correct token name ([1295850](https://github.com/hyperspell/node-sdk/commit/1295850e14526b98d4827447da95d298fb217583))
* **client:** don't send `Content-Type` for bodyless methods ([9309eaf](https://github.com/hyperspell/node-sdk/commit/9309eaffdacdb289995889ebf1323d8353340386))
* **mcp:** include required section for top-level properties and support naming transformations ([36ae37a](https://github.com/hyperspell/node-sdk/commit/36ae37a714ae033b6e1afa6e58659d36103025d0))
* **mcp:** relax input type for asTextContextResult ([dea08b8](https://github.com/hyperspell/node-sdk/commit/dea08b8a889f6de17e5d9998a048413ca64de701))
* **mcp:** support jq filtering on cloudflare workers ([00f8fa1](https://github.com/hyperspell/node-sdk/commit/00f8fa1e38ea13528e5ec85b349ad1a42cd58adf))


### Chores

* **ci:** only run for pushes and fork pull requests ([2a758c8](https://github.com/hyperspell/node-sdk/commit/2a758c8b7211de130f2287d9ceb2ffb51b926a78))
* make some internal functions async ([e5a5551](https://github.com/hyperspell/node-sdk/commit/e5a555192685f17fc6a0024e820aef1caf907420))
* **mcp:** formatting ([7e8f571](https://github.com/hyperspell/node-sdk/commit/7e8f5714098860d0e7759ae0571c13eb51ce284c))
* **mcp:** rework imports in tools ([88946b8](https://github.com/hyperspell/node-sdk/commit/88946b875abebe36b6f50c81b1719183c0feadaa))
* mention unit type in timeout docs ([8b1f715](https://github.com/hyperspell/node-sdk/commit/8b1f715719b0258460adb86d435c062642afe603))

## 0.18.2 (2025-06-26)

Full Changelog: [v0.18.1...v0.18.2](https://github.com/hyperspell/node-sdk/compare/v0.18.1...v0.18.2)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#32](https://github.com/hyperspell/node-sdk/issues/32)) ([ecdef89](https://github.com/hyperspell/node-sdk/commit/ecdef891f2210522efe31e5120d26ad572432f3b))
* **api:** api update ([6122fb8](https://github.com/hyperspell/node-sdk/commit/6122fb8a0817e92f2665d103278eb6d946d60013))
* **api:** api update ([cc5505c](https://github.com/hyperspell/node-sdk/commit/cc5505ce2b352a23f91b28ace3e6f6c04229acf3))
* **api:** api update ([a90e7f5](https://github.com/hyperspell/node-sdk/commit/a90e7f56a4a898bd629f500949bff54aa0ff6046))
* **api:** api update ([ffee59f](https://github.com/hyperspell/node-sdk/commit/ffee59fefc3926c86aaa147936c3264900d9ae3e))
* **api:** api update ([b0c556a](https://github.com/hyperspell/node-sdk/commit/b0c556a79a7c11b5f277f8b9f56a22f8aa591ca5))
* **api:** api update ([97abf79](https://github.com/hyperspell/node-sdk/commit/97abf798eb472aa7ad7c471651b149358385d6d1))
* **api:** api update ([ace1ff1](https://github.com/hyperspell/node-sdk/commit/ace1ff15d2f1efffaf828ee8e48e4e06fb09091e))
* **api:** api update ([dcc1551](https://github.com/hyperspell/node-sdk/commit/dcc155132a0d130ff62a64de0847b612e7e477fc))
* **api:** api update ([6f9c746](https://github.com/hyperspell/node-sdk/commit/6f9c74687f4e79cf83ed0d5b705064ab0b5d413e))
* **api:** api update ([d297aa4](https://github.com/hyperspell/node-sdk/commit/d297aa4cbd7b2373713381cbbd8c15f64d240d8c))
* **api:** api update ([8b34c9c](https://github.com/hyperspell/node-sdk/commit/8b34c9c53094a169859994230d3100dadb68fd92))
* **api:** api update ([8e96b1d](https://github.com/hyperspell/node-sdk/commit/8e96b1d77f28d18a252a3a3eccaf5f4345a56159))
* **api:** api update ([0cfb6ba](https://github.com/hyperspell/node-sdk/commit/0cfb6ba9bdac14f4c8c5fd6b6748940aab3c747b))
* **api:** api update ([7fc15c1](https://github.com/hyperspell/node-sdk/commit/7fc15c1e157998bf4713f7008ad190e10cdb6931))
* **api:** api update ([a9f4767](https://github.com/hyperspell/node-sdk/commit/a9f47673364b5e8f8b2fcfee54b2c7a22eca9d2b))
* **api:** api update ([7a2bd69](https://github.com/hyperspell/node-sdk/commit/7a2bd691ceb933053e41ace833524fa7eb03f0fe))
* **api:** api update ([18e40aa](https://github.com/hyperspell/node-sdk/commit/18e40aa3424efad169f6bb6f84b5e8a4c3b63780))
* **api:** api update ([e9a6314](https://github.com/hyperspell/node-sdk/commit/e9a631469f5daf849bce2a0d4b3c18580a6ce208))
* **api:** api update ([f304147](https://github.com/hyperspell/node-sdk/commit/f3041475263292a22094818a67808ce6bc18498f))
* **api:** api update ([d493a36](https://github.com/hyperspell/node-sdk/commit/d493a36acac1df96fc4d4f0d2e7ed355b812531a))
* **api:** api update ([#10](https://github.com/hyperspell/node-sdk/issues/10)) ([1ad272d](https://github.com/hyperspell/node-sdk/commit/1ad272d7bb37cdabb3936b78afdd173373b23f7c))
* **api:** api update ([#11](https://github.com/hyperspell/node-sdk/issues/11)) ([ca3bf92](https://github.com/hyperspell/node-sdk/commit/ca3bf923a154883f28cd3218bd63f5ccd780ad78))
* **api:** api update ([#12](https://github.com/hyperspell/node-sdk/issues/12)) ([34a173e](https://github.com/hyperspell/node-sdk/commit/34a173e58f1183862b936a8d5f76c6ed0f165fae))
* **api:** api update ([#16](https://github.com/hyperspell/node-sdk/issues/16)) ([9e6e833](https://github.com/hyperspell/node-sdk/commit/9e6e8330a02da1d106f9e172ac634afc08130bd0))
* **api:** api update ([#18](https://github.com/hyperspell/node-sdk/issues/18)) ([2cecbfd](https://github.com/hyperspell/node-sdk/commit/2cecbfda356a7588bdbc42f5ef41b0fbab41b553))
* **api:** api update ([#23](https://github.com/hyperspell/node-sdk/issues/23)) ([c9aaf54](https://github.com/hyperspell/node-sdk/commit/c9aaf54d0505676b9cc6a75af87a9994cca2f5b3))
* **api:** api update ([#24](https://github.com/hyperspell/node-sdk/issues/24)) ([5326693](https://github.com/hyperspell/node-sdk/commit/53266933ad271b9f2f00b7c7e3607eb91f65b7f4))
* **api:** api update ([#25](https://github.com/hyperspell/node-sdk/issues/25)) ([fdc83d1](https://github.com/hyperspell/node-sdk/commit/fdc83d13e6e6d4de12378b219a3ed6b790c66466))
* **api:** api update ([#26](https://github.com/hyperspell/node-sdk/issues/26)) ([eef40b4](https://github.com/hyperspell/node-sdk/commit/eef40b4f33a39ad5a7887669414a4efdd3303f80))
* **api:** api update ([#42](https://github.com/hyperspell/node-sdk/issues/42)) ([9e25c59](https://github.com/hyperspell/node-sdk/commit/9e25c59176277df1cd2999ed875968d68137f93d))
* **api:** api update ([#45](https://github.com/hyperspell/node-sdk/issues/45)) ([c3a3155](https://github.com/hyperspell/node-sdk/commit/c3a315587edbcb59c75c382d04139b2b11b6f0a8))
* **api:** api update ([#5](https://github.com/hyperspell/node-sdk/issues/5)) ([49c1d73](https://github.com/hyperspell/node-sdk/commit/49c1d739eafe4518cffb8e60bc082d4be2144c5f))
* **api:** api update ([#50](https://github.com/hyperspell/node-sdk/issues/50)) ([83c66fb](https://github.com/hyperspell/node-sdk/commit/83c66fb558a9aa88ddf82db79e32b4d77de40b44))
* **api:** api update ([#53](https://github.com/hyperspell/node-sdk/issues/53)) ([32b52ca](https://github.com/hyperspell/node-sdk/commit/32b52ca847549a290c5fa607a81798b183fdee0c))
* **api:** api update ([#54](https://github.com/hyperspell/node-sdk/issues/54)) ([90e3bd2](https://github.com/hyperspell/node-sdk/commit/90e3bd208b5710c52acd2ac01ae40f571f07b499))
* **api:** api update ([#55](https://github.com/hyperspell/node-sdk/issues/55)) ([6ea3488](https://github.com/hyperspell/node-sdk/commit/6ea348848f1d22e9c9e4dc9bf9f4304d18b7e253))
* **api:** api update ([#56](https://github.com/hyperspell/node-sdk/issues/56)) ([8206477](https://github.com/hyperspell/node-sdk/commit/8206477f03333625de9885a0856830911e065ff2))
* **api:** api update ([#7](https://github.com/hyperspell/node-sdk/issues/7)) ([0291c15](https://github.com/hyperspell/node-sdk/commit/0291c15da339ddd03f7b96bfad251becacd21a56))
* **api:** api update ([#8](https://github.com/hyperspell/node-sdk/issues/8)) ([a78d165](https://github.com/hyperspell/node-sdk/commit/a78d165d4dfb39eddaf3982980a4978aef3cd931))
* **api:** api update ([#9](https://github.com/hyperspell/node-sdk/issues/9)) ([615224f](https://github.com/hyperspell/node-sdk/commit/615224fea9f9d26c0b4ea6bcb1f4dbebb41310f4))
* **api:** update via SDK Studio ([5c293ed](https://github.com/hyperspell/node-sdk/commit/5c293ed26ab72b6220bc6334b67859dc6e2e01c2))
* **api:** update via SDK Studio ([e3c9405](https://github.com/hyperspell/node-sdk/commit/e3c9405f8cc3c09738aca1d8205784b73bf6a70b))
* **api:** update via SDK Studio ([56e8d3d](https://github.com/hyperspell/node-sdk/commit/56e8d3d588b3fe39a429bae486de22c9d9df382a))
* **api:** update via SDK Studio ([a7d1ef1](https://github.com/hyperspell/node-sdk/commit/a7d1ef1925f4c1b590d8fd77769b2c0457438227))
* **api:** update via SDK Studio ([93433a4](https://github.com/hyperspell/node-sdk/commit/93433a4900d5f21ba3aa95ef143698bba2120fdc))
* **api:** update via SDK Studio ([68ff276](https://github.com/hyperspell/node-sdk/commit/68ff27614f7c6f44c2b5779dfdb4711430b3d5b5))
* **api:** update via SDK Studio ([967aec7](https://github.com/hyperspell/node-sdk/commit/967aec7b22cab5f2f1f6865aaf699652210abe82))
* **api:** update via SDK Studio ([bef3818](https://github.com/hyperspell/node-sdk/commit/bef38187fbabc7b1d251ac453d4ce39713d5a5d3))
* **api:** update via SDK Studio ([032db7c](https://github.com/hyperspell/node-sdk/commit/032db7c699840bae6e4b4c952091d8d6bbbb3a08))
* **api:** update via SDK Studio ([7b3a297](https://github.com/hyperspell/node-sdk/commit/7b3a297614bffc729105cd75151a1c7df255fd59))
* **api:** update via SDK Studio ([b411129](https://github.com/hyperspell/node-sdk/commit/b41112960489ea077a9656f80f4436fbbae006b6))
* **api:** update via SDK Studio ([d96b74c](https://github.com/hyperspell/node-sdk/commit/d96b74c0b31fc76e5ad3fb2382ad615c505b4b41))
* **api:** update via SDK Studio ([bbb4650](https://github.com/hyperspell/node-sdk/commit/bbb4650d17f6ec312e2b51bca152881c96577775))
* **api:** update via SDK Studio ([1fc55d0](https://github.com/hyperspell/node-sdk/commit/1fc55d011194539566ca8ec2f9cf6ff1e7aba952))
* **api:** update via SDK Studio ([#13](https://github.com/hyperspell/node-sdk/issues/13)) ([924b6b0](https://github.com/hyperspell/node-sdk/commit/924b6b01ae650c00fd8baec3abd3e6927aa46519))
* **api:** update via SDK Studio ([#14](https://github.com/hyperspell/node-sdk/issues/14)) ([1e4ebfe](https://github.com/hyperspell/node-sdk/commit/1e4ebfeb7e4fc24c9d2bf4267b006c91f96239a6))
* **api:** update via SDK Studio ([#20](https://github.com/hyperspell/node-sdk/issues/20)) ([4a2c34a](https://github.com/hyperspell/node-sdk/commit/4a2c34a97b3e2131ac1c0f6f392d54962bc50f62))
* **api:** update via SDK Studio ([#38](https://github.com/hyperspell/node-sdk/issues/38)) ([61373c8](https://github.com/hyperspell/node-sdk/commit/61373c843629c169d69c4dd133d5b3a9899a230f))
* **api:** update via SDK Studio ([#39](https://github.com/hyperspell/node-sdk/issues/39)) ([a0ce99a](https://github.com/hyperspell/node-sdk/commit/a0ce99aae41fa41ad8bde420f00870ce647ff5d1))
* **api:** update via SDK Studio ([#40](https://github.com/hyperspell/node-sdk/issues/40)) ([5614b84](https://github.com/hyperspell/node-sdk/commit/5614b84d9d2f34d59ba1b61dc43dd7ce4a143d3a))
* **api:** update via SDK Studio ([#41](https://github.com/hyperspell/node-sdk/issues/41)) ([6f9da54](https://github.com/hyperspell/node-sdk/commit/6f9da54a9104bbaab340cfb230f4217fdc8ec4ed))
* **api:** update via SDK Studio ([#43](https://github.com/hyperspell/node-sdk/issues/43)) ([588ad3b](https://github.com/hyperspell/node-sdk/commit/588ad3b6267ca1509e01babedaa2ff89c830bbc0))
* **client:** accept RFC6838 JSON content types ([#33](https://github.com/hyperspell/node-sdk/issues/33)) ([ca38adc](https://github.com/hyperspell/node-sdk/commit/ca38adc6b3125f68d682462e42f7c79ac0d65da1))
* **client:** add support for endpoint-specific base URLs ([41c9568](https://github.com/hyperspell/node-sdk/commit/41c95688af490efd90cf8019b62a1b52cfb99b3e))
* **client:** send `X-Stainless-Timeout` header ([#22](https://github.com/hyperspell/node-sdk/issues/22)) ([4ad8147](https://github.com/hyperspell/node-sdk/commit/4ad814769ef6503eb9b5a51c14d1ea3f74c736c5))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#51](https://github.com/hyperspell/node-sdk/issues/51)) ([bd6cc31](https://github.com/hyperspell/node-sdk/commit/bd6cc31121c57380fca8088bd569f7c79b93164c))
* avoid type error in certain environments ([#37](https://github.com/hyperspell/node-sdk/issues/37)) ([42542b9](https://github.com/hyperspell/node-sdk/commit/42542b91e05ae3543112c21eae0c110158b753e5))
* **client:** fix export map for index exports ([#27](https://github.com/hyperspell/node-sdk/issues/27)) ([5543d8e](https://github.com/hyperspell/node-sdk/commit/5543d8ea3804070de726997e8474deb01318eb68))
* **client:** send `X-Stainless-Timeout` in seconds ([#48](https://github.com/hyperspell/node-sdk/issues/48)) ([ed30b4c](https://github.com/hyperspell/node-sdk/commit/ed30b4c0c4c8802c1ecc999b8d628ab16b81ce82))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#47](https://github.com/hyperspell/node-sdk/issues/47)) ([f4a35e1](https://github.com/hyperspell/node-sdk/commit/f4a35e10b5a6fd2ef6a092643a64a0ddbf485c2f))
* **mcp:** remove unused tools.ts ([#52](https://github.com/hyperspell/node-sdk/issues/52)) ([81d6ccd](https://github.com/hyperspell/node-sdk/commit/81d6ccd257f8a29c226a8885fe5120c721ba2a66))
* publish script — handle NPM errors correctly ([b69fab6](https://github.com/hyperspell/node-sdk/commit/b69fab6cd8fedb0ae57a885b2e86715b8b9df3ba))


### Chores

* **ci:** add timeout thresholds for CI jobs ([b0a9540](https://github.com/hyperspell/node-sdk/commit/b0a95401a7cffc8b4a460926d68943e9f355c925))
* **ci:** bump node version for release workflows ([ec832be](https://github.com/hyperspell/node-sdk/commit/ec832be086586fdd36081ef92c8d05711b7aef96))
* **ci:** enable for pull requests ([a326896](https://github.com/hyperspell/node-sdk/commit/a326896ffcebabc961ab6df118623fe57113459b))
* **ci:** only use depot for staging repos ([a39159d](https://github.com/hyperspell/node-sdk/commit/a39159da3134e1b5cbd5e47d39b8ce24c0f0d1be))
* **client:** minor internal fixes ([ad7b9c1](https://github.com/hyperspell/node-sdk/commit/ad7b9c1fe80a8c1e866bcc5fac0172f26b4d8330))
* configure new SDK language ([8c13384](https://github.com/hyperspell/node-sdk/commit/8c13384ed9565c850e8c732bc83da96f3f73671d))
* configure new SDK language ([6b1ea1e](https://github.com/hyperspell/node-sdk/commit/6b1ea1ee164cf9bad4273005a5ef22096c1a290c))
* **docs:** add missing deprecation warnings ([32486cc](https://github.com/hyperspell/node-sdk/commit/32486ccb3b493dc7e68f7681c4c1ba5054a9cd63))
* **docs:** grammar improvements ([66e2a3d](https://github.com/hyperspell/node-sdk/commit/66e2a3d1d316adea94ccf9ebf6658b81b0e0a7f3))
* **docs:** use top-level-await in example snippets ([9dba44a](https://github.com/hyperspell/node-sdk/commit/9dba44a45ccc28f2ac366eb6b50de4c0cb933b06))
* **exports:** cleaner resource index imports ([#35](https://github.com/hyperspell/node-sdk/issues/35)) ([641f5b3](https://github.com/hyperspell/node-sdk/commit/641f5b3a2311b4db0c16d4555e6073a502c94226))
* **exports:** stop using path fallbacks ([#36](https://github.com/hyperspell/node-sdk/issues/36)) ([801d961](https://github.com/hyperspell/node-sdk/commit/801d961baa29194a1ecc3656305297e893fb2bb0))
* go live ([#1](https://github.com/hyperspell/node-sdk/issues/1)) ([88cabb4](https://github.com/hyperspell/node-sdk/commit/88cabb40b7540aabd038ae209f129e05d0917a4e))
* improve publish-npm script --latest tag logic ([55d7d43](https://github.com/hyperspell/node-sdk/commit/55d7d438e1a910e3ef773b95f9e1a4038b130353))
* **internal:** add aliases for Record and Array ([#49](https://github.com/hyperspell/node-sdk/issues/49)) ([680264c](https://github.com/hyperspell/node-sdk/commit/680264c480dda059684bfcff5637f6402b49a278))
* **internal:** codegen related update ([c044268](https://github.com/hyperspell/node-sdk/commit/c044268dcbd4cf5be42fa77a28731b5921847aa4))
* **internal:** codegen related update ([96a6428](https://github.com/hyperspell/node-sdk/commit/96a642805334376da1691482c8de710cb30d8e54))
* **internal:** codegen related update ([0f48c3c](https://github.com/hyperspell/node-sdk/commit/0f48c3c73e7a5f5bd2f5a21b58d5e42c369b5a7a))
* **internal:** codegen related update ([7136be0](https://github.com/hyperspell/node-sdk/commit/7136be08b13c920d0255e19aa65135245fbb8ba6))
* **internal:** codegen related update ([b4aec87](https://github.com/hyperspell/node-sdk/commit/b4aec87aec69128a7a2ff13a1f19a4104d0960f8))
* **internal:** codegen related update ([#28](https://github.com/hyperspell/node-sdk/issues/28)) ([44c69e8](https://github.com/hyperspell/node-sdk/commit/44c69e887a6e32339a487e28e14e444e68ac32c5))
* **internal:** codegen related update ([#31](https://github.com/hyperspell/node-sdk/issues/31)) ([2b286c1](https://github.com/hyperspell/node-sdk/commit/2b286c14f6545cfaf65259fabc051c40dbe336e7))
* **internal:** fix devcontainers setup ([#29](https://github.com/hyperspell/node-sdk/issues/29)) ([26194ce](https://github.com/hyperspell/node-sdk/commit/26194ce3891b4f5e6bc89d13a7e8c85137dfe731))
* **internal:** make base APIResource abstract ([65f20d3](https://github.com/hyperspell/node-sdk/commit/65f20d34a4bd8349d7570924d675f56ae8bdbdda))
* **internal:** reduce CI branch coverage ([230a7e0](https://github.com/hyperspell/node-sdk/commit/230a7e040ced22028266e6caf812724fdd2818e3))
* **internal:** remove extra empty newlines ([#34](https://github.com/hyperspell/node-sdk/issues/34)) ([3677c0c](https://github.com/hyperspell/node-sdk/commit/3677c0c5673c2f49e7f37072be45aad49f1ee5d6))
* **internal:** upload builds and expand CI branch coverage ([9c9f933](https://github.com/hyperspell/node-sdk/commit/9c9f933f203a26408ce4b4ef0bedffe5cdce1ad6))
* update SDK settings ([#3](https://github.com/hyperspell/node-sdk/issues/3)) ([99ef2f5](https://github.com/hyperspell/node-sdk/commit/99ef2f5de368ba55fa92f6678e44b94035f8bc9c))


### Documentation

* add examples to tsdocs ([35758b5](https://github.com/hyperspell/node-sdk/commit/35758b5425045930db8766fe1fabc2cc80039766))
* **readme:** fix typo ([b3c1a53](https://github.com/hyperspell/node-sdk/commit/b3c1a539678787c6b7d6d89aa4d32dc2be0b6f87))
* update URLs from stainlessapi.com to stainless.com ([#30](https://github.com/hyperspell/node-sdk/issues/30)) ([f9c0492](https://github.com/hyperspell/node-sdk/commit/f9c04926d82f1f863e6e111feb3b6e4ab33ff0bf))


### Refactors

* **types:** replace Record with mapped types ([9eeba1f](https://github.com/hyperspell/node-sdk/commit/9eeba1fd8c68e19ae8235ea47f1bbf384cb77281))

## 0.18.1 (2025-06-26)

Full Changelog: [v1.0.0...v0.18.1](https://github.com/hyperspell/node-sdk/compare/v1.0.0...v0.18.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#32](https://github.com/hyperspell/node-sdk/issues/32)) ([ecdef89](https://github.com/hyperspell/node-sdk/commit/ecdef891f2210522efe31e5120d26ad572432f3b))
* **api:** api update ([6122fb8](https://github.com/hyperspell/node-sdk/commit/6122fb8a0817e92f2665d103278eb6d946d60013))
* **api:** api update ([cc5505c](https://github.com/hyperspell/node-sdk/commit/cc5505ce2b352a23f91b28ace3e6f6c04229acf3))
* **api:** api update ([a90e7f5](https://github.com/hyperspell/node-sdk/commit/a90e7f56a4a898bd629f500949bff54aa0ff6046))
* **api:** api update ([ffee59f](https://github.com/hyperspell/node-sdk/commit/ffee59fefc3926c86aaa147936c3264900d9ae3e))
* **api:** api update ([b0c556a](https://github.com/hyperspell/node-sdk/commit/b0c556a79a7c11b5f277f8b9f56a22f8aa591ca5))
* **api:** api update ([97abf79](https://github.com/hyperspell/node-sdk/commit/97abf798eb472aa7ad7c471651b149358385d6d1))
* **api:** api update ([ace1ff1](https://github.com/hyperspell/node-sdk/commit/ace1ff15d2f1efffaf828ee8e48e4e06fb09091e))
* **api:** api update ([dcc1551](https://github.com/hyperspell/node-sdk/commit/dcc155132a0d130ff62a64de0847b612e7e477fc))
* **api:** api update ([6f9c746](https://github.com/hyperspell/node-sdk/commit/6f9c74687f4e79cf83ed0d5b705064ab0b5d413e))
* **api:** api update ([d297aa4](https://github.com/hyperspell/node-sdk/commit/d297aa4cbd7b2373713381cbbd8c15f64d240d8c))
* **api:** api update ([8b34c9c](https://github.com/hyperspell/node-sdk/commit/8b34c9c53094a169859994230d3100dadb68fd92))
* **api:** api update ([8e96b1d](https://github.com/hyperspell/node-sdk/commit/8e96b1d77f28d18a252a3a3eccaf5f4345a56159))
* **api:** api update ([0cfb6ba](https://github.com/hyperspell/node-sdk/commit/0cfb6ba9bdac14f4c8c5fd6b6748940aab3c747b))
* **api:** api update ([7fc15c1](https://github.com/hyperspell/node-sdk/commit/7fc15c1e157998bf4713f7008ad190e10cdb6931))
* **api:** api update ([a9f4767](https://github.com/hyperspell/node-sdk/commit/a9f47673364b5e8f8b2fcfee54b2c7a22eca9d2b))
* **api:** api update ([7a2bd69](https://github.com/hyperspell/node-sdk/commit/7a2bd691ceb933053e41ace833524fa7eb03f0fe))
* **api:** api update ([18e40aa](https://github.com/hyperspell/node-sdk/commit/18e40aa3424efad169f6bb6f84b5e8a4c3b63780))
* **api:** api update ([e9a6314](https://github.com/hyperspell/node-sdk/commit/e9a631469f5daf849bce2a0d4b3c18580a6ce208))
* **api:** api update ([f304147](https://github.com/hyperspell/node-sdk/commit/f3041475263292a22094818a67808ce6bc18498f))
* **api:** api update ([d493a36](https://github.com/hyperspell/node-sdk/commit/d493a36acac1df96fc4d4f0d2e7ed355b812531a))
* **api:** api update ([#10](https://github.com/hyperspell/node-sdk/issues/10)) ([1ad272d](https://github.com/hyperspell/node-sdk/commit/1ad272d7bb37cdabb3936b78afdd173373b23f7c))
* **api:** api update ([#11](https://github.com/hyperspell/node-sdk/issues/11)) ([ca3bf92](https://github.com/hyperspell/node-sdk/commit/ca3bf923a154883f28cd3218bd63f5ccd780ad78))
* **api:** api update ([#12](https://github.com/hyperspell/node-sdk/issues/12)) ([34a173e](https://github.com/hyperspell/node-sdk/commit/34a173e58f1183862b936a8d5f76c6ed0f165fae))
* **api:** api update ([#16](https://github.com/hyperspell/node-sdk/issues/16)) ([9e6e833](https://github.com/hyperspell/node-sdk/commit/9e6e8330a02da1d106f9e172ac634afc08130bd0))
* **api:** api update ([#18](https://github.com/hyperspell/node-sdk/issues/18)) ([2cecbfd](https://github.com/hyperspell/node-sdk/commit/2cecbfda356a7588bdbc42f5ef41b0fbab41b553))
* **api:** api update ([#23](https://github.com/hyperspell/node-sdk/issues/23)) ([c9aaf54](https://github.com/hyperspell/node-sdk/commit/c9aaf54d0505676b9cc6a75af87a9994cca2f5b3))
* **api:** api update ([#24](https://github.com/hyperspell/node-sdk/issues/24)) ([5326693](https://github.com/hyperspell/node-sdk/commit/53266933ad271b9f2f00b7c7e3607eb91f65b7f4))
* **api:** api update ([#25](https://github.com/hyperspell/node-sdk/issues/25)) ([fdc83d1](https://github.com/hyperspell/node-sdk/commit/fdc83d13e6e6d4de12378b219a3ed6b790c66466))
* **api:** api update ([#26](https://github.com/hyperspell/node-sdk/issues/26)) ([eef40b4](https://github.com/hyperspell/node-sdk/commit/eef40b4f33a39ad5a7887669414a4efdd3303f80))
* **api:** api update ([#42](https://github.com/hyperspell/node-sdk/issues/42)) ([9e25c59](https://github.com/hyperspell/node-sdk/commit/9e25c59176277df1cd2999ed875968d68137f93d))
* **api:** api update ([#45](https://github.com/hyperspell/node-sdk/issues/45)) ([c3a3155](https://github.com/hyperspell/node-sdk/commit/c3a315587edbcb59c75c382d04139b2b11b6f0a8))
* **api:** api update ([#5](https://github.com/hyperspell/node-sdk/issues/5)) ([49c1d73](https://github.com/hyperspell/node-sdk/commit/49c1d739eafe4518cffb8e60bc082d4be2144c5f))
* **api:** api update ([#50](https://github.com/hyperspell/node-sdk/issues/50)) ([83c66fb](https://github.com/hyperspell/node-sdk/commit/83c66fb558a9aa88ddf82db79e32b4d77de40b44))
* **api:** api update ([#53](https://github.com/hyperspell/node-sdk/issues/53)) ([32b52ca](https://github.com/hyperspell/node-sdk/commit/32b52ca847549a290c5fa607a81798b183fdee0c))
* **api:** api update ([#54](https://github.com/hyperspell/node-sdk/issues/54)) ([90e3bd2](https://github.com/hyperspell/node-sdk/commit/90e3bd208b5710c52acd2ac01ae40f571f07b499))
* **api:** api update ([#55](https://github.com/hyperspell/node-sdk/issues/55)) ([6ea3488](https://github.com/hyperspell/node-sdk/commit/6ea348848f1d22e9c9e4dc9bf9f4304d18b7e253))
* **api:** api update ([#56](https://github.com/hyperspell/node-sdk/issues/56)) ([8206477](https://github.com/hyperspell/node-sdk/commit/8206477f03333625de9885a0856830911e065ff2))
* **api:** api update ([#7](https://github.com/hyperspell/node-sdk/issues/7)) ([0291c15](https://github.com/hyperspell/node-sdk/commit/0291c15da339ddd03f7b96bfad251becacd21a56))
* **api:** api update ([#8](https://github.com/hyperspell/node-sdk/issues/8)) ([a78d165](https://github.com/hyperspell/node-sdk/commit/a78d165d4dfb39eddaf3982980a4978aef3cd931))
* **api:** api update ([#9](https://github.com/hyperspell/node-sdk/issues/9)) ([615224f](https://github.com/hyperspell/node-sdk/commit/615224fea9f9d26c0b4ea6bcb1f4dbebb41310f4))
* **api:** update via SDK Studio ([93433a4](https://github.com/hyperspell/node-sdk/commit/93433a4900d5f21ba3aa95ef143698bba2120fdc))
* **api:** update via SDK Studio ([68ff276](https://github.com/hyperspell/node-sdk/commit/68ff27614f7c6f44c2b5779dfdb4711430b3d5b5))
* **api:** update via SDK Studio ([967aec7](https://github.com/hyperspell/node-sdk/commit/967aec7b22cab5f2f1f6865aaf699652210abe82))
* **api:** update via SDK Studio ([bef3818](https://github.com/hyperspell/node-sdk/commit/bef38187fbabc7b1d251ac453d4ce39713d5a5d3))
* **api:** update via SDK Studio ([032db7c](https://github.com/hyperspell/node-sdk/commit/032db7c699840bae6e4b4c952091d8d6bbbb3a08))
* **api:** update via SDK Studio ([7b3a297](https://github.com/hyperspell/node-sdk/commit/7b3a297614bffc729105cd75151a1c7df255fd59))
* **api:** update via SDK Studio ([b411129](https://github.com/hyperspell/node-sdk/commit/b41112960489ea077a9656f80f4436fbbae006b6))
* **api:** update via SDK Studio ([d96b74c](https://github.com/hyperspell/node-sdk/commit/d96b74c0b31fc76e5ad3fb2382ad615c505b4b41))
* **api:** update via SDK Studio ([bbb4650](https://github.com/hyperspell/node-sdk/commit/bbb4650d17f6ec312e2b51bca152881c96577775))
* **api:** update via SDK Studio ([1fc55d0](https://github.com/hyperspell/node-sdk/commit/1fc55d011194539566ca8ec2f9cf6ff1e7aba952))
* **api:** update via SDK Studio ([#13](https://github.com/hyperspell/node-sdk/issues/13)) ([924b6b0](https://github.com/hyperspell/node-sdk/commit/924b6b01ae650c00fd8baec3abd3e6927aa46519))
* **api:** update via SDK Studio ([#14](https://github.com/hyperspell/node-sdk/issues/14)) ([1e4ebfe](https://github.com/hyperspell/node-sdk/commit/1e4ebfeb7e4fc24c9d2bf4267b006c91f96239a6))
* **api:** update via SDK Studio ([#20](https://github.com/hyperspell/node-sdk/issues/20)) ([4a2c34a](https://github.com/hyperspell/node-sdk/commit/4a2c34a97b3e2131ac1c0f6f392d54962bc50f62))
* **api:** update via SDK Studio ([#38](https://github.com/hyperspell/node-sdk/issues/38)) ([61373c8](https://github.com/hyperspell/node-sdk/commit/61373c843629c169d69c4dd133d5b3a9899a230f))
* **api:** update via SDK Studio ([#39](https://github.com/hyperspell/node-sdk/issues/39)) ([a0ce99a](https://github.com/hyperspell/node-sdk/commit/a0ce99aae41fa41ad8bde420f00870ce647ff5d1))
* **api:** update via SDK Studio ([#40](https://github.com/hyperspell/node-sdk/issues/40)) ([5614b84](https://github.com/hyperspell/node-sdk/commit/5614b84d9d2f34d59ba1b61dc43dd7ce4a143d3a))
* **api:** update via SDK Studio ([#41](https://github.com/hyperspell/node-sdk/issues/41)) ([6f9da54](https://github.com/hyperspell/node-sdk/commit/6f9da54a9104bbaab340cfb230f4217fdc8ec4ed))
* **api:** update via SDK Studio ([#43](https://github.com/hyperspell/node-sdk/issues/43)) ([588ad3b](https://github.com/hyperspell/node-sdk/commit/588ad3b6267ca1509e01babedaa2ff89c830bbc0))
* **client:** accept RFC6838 JSON content types ([#33](https://github.com/hyperspell/node-sdk/issues/33)) ([ca38adc](https://github.com/hyperspell/node-sdk/commit/ca38adc6b3125f68d682462e42f7c79ac0d65da1))
* **client:** add support for endpoint-specific base URLs ([41c9568](https://github.com/hyperspell/node-sdk/commit/41c95688af490efd90cf8019b62a1b52cfb99b3e))
* **client:** send `X-Stainless-Timeout` header ([#22](https://github.com/hyperspell/node-sdk/issues/22)) ([4ad8147](https://github.com/hyperspell/node-sdk/commit/4ad814769ef6503eb9b5a51c14d1ea3f74c736c5))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#51](https://github.com/hyperspell/node-sdk/issues/51)) ([bd6cc31](https://github.com/hyperspell/node-sdk/commit/bd6cc31121c57380fca8088bd569f7c79b93164c))
* avoid type error in certain environments ([#37](https://github.com/hyperspell/node-sdk/issues/37)) ([42542b9](https://github.com/hyperspell/node-sdk/commit/42542b91e05ae3543112c21eae0c110158b753e5))
* **client:** fix export map for index exports ([#27](https://github.com/hyperspell/node-sdk/issues/27)) ([5543d8e](https://github.com/hyperspell/node-sdk/commit/5543d8ea3804070de726997e8474deb01318eb68))
* **client:** send `X-Stainless-Timeout` in seconds ([#48](https://github.com/hyperspell/node-sdk/issues/48)) ([ed30b4c](https://github.com/hyperspell/node-sdk/commit/ed30b4c0c4c8802c1ecc999b8d628ab16b81ce82))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#47](https://github.com/hyperspell/node-sdk/issues/47)) ([f4a35e1](https://github.com/hyperspell/node-sdk/commit/f4a35e10b5a6fd2ef6a092643a64a0ddbf485c2f))
* **mcp:** remove unused tools.ts ([#52](https://github.com/hyperspell/node-sdk/issues/52)) ([81d6ccd](https://github.com/hyperspell/node-sdk/commit/81d6ccd257f8a29c226a8885fe5120c721ba2a66))
* publish script — handle NPM errors correctly ([b69fab6](https://github.com/hyperspell/node-sdk/commit/b69fab6cd8fedb0ae57a885b2e86715b8b9df3ba))


### Chores

* **ci:** add timeout thresholds for CI jobs ([b0a9540](https://github.com/hyperspell/node-sdk/commit/b0a95401a7cffc8b4a460926d68943e9f355c925))
* **ci:** bump node version for release workflows ([ec832be](https://github.com/hyperspell/node-sdk/commit/ec832be086586fdd36081ef92c8d05711b7aef96))
* **ci:** enable for pull requests ([a326896](https://github.com/hyperspell/node-sdk/commit/a326896ffcebabc961ab6df118623fe57113459b))
* **ci:** only use depot for staging repos ([a39159d](https://github.com/hyperspell/node-sdk/commit/a39159da3134e1b5cbd5e47d39b8ce24c0f0d1be))
* **client:** minor internal fixes ([ad7b9c1](https://github.com/hyperspell/node-sdk/commit/ad7b9c1fe80a8c1e866bcc5fac0172f26b4d8330))
* configure new SDK language ([8c13384](https://github.com/hyperspell/node-sdk/commit/8c13384ed9565c850e8c732bc83da96f3f73671d))
* configure new SDK language ([6b1ea1e](https://github.com/hyperspell/node-sdk/commit/6b1ea1ee164cf9bad4273005a5ef22096c1a290c))
* **docs:** add missing deprecation warnings ([32486cc](https://github.com/hyperspell/node-sdk/commit/32486ccb3b493dc7e68f7681c4c1ba5054a9cd63))
* **docs:** grammar improvements ([66e2a3d](https://github.com/hyperspell/node-sdk/commit/66e2a3d1d316adea94ccf9ebf6658b81b0e0a7f3))
* **docs:** use top-level-await in example snippets ([9dba44a](https://github.com/hyperspell/node-sdk/commit/9dba44a45ccc28f2ac366eb6b50de4c0cb933b06))
* **exports:** cleaner resource index imports ([#35](https://github.com/hyperspell/node-sdk/issues/35)) ([641f5b3](https://github.com/hyperspell/node-sdk/commit/641f5b3a2311b4db0c16d4555e6073a502c94226))
* **exports:** stop using path fallbacks ([#36](https://github.com/hyperspell/node-sdk/issues/36)) ([801d961](https://github.com/hyperspell/node-sdk/commit/801d961baa29194a1ecc3656305297e893fb2bb0))
* go live ([#1](https://github.com/hyperspell/node-sdk/issues/1)) ([88cabb4](https://github.com/hyperspell/node-sdk/commit/88cabb40b7540aabd038ae209f129e05d0917a4e))
* improve publish-npm script --latest tag logic ([55d7d43](https://github.com/hyperspell/node-sdk/commit/55d7d438e1a910e3ef773b95f9e1a4038b130353))
* **internal:** add aliases for Record and Array ([#49](https://github.com/hyperspell/node-sdk/issues/49)) ([680264c](https://github.com/hyperspell/node-sdk/commit/680264c480dda059684bfcff5637f6402b49a278))
* **internal:** codegen related update ([c044268](https://github.com/hyperspell/node-sdk/commit/c044268dcbd4cf5be42fa77a28731b5921847aa4))
* **internal:** codegen related update ([96a6428](https://github.com/hyperspell/node-sdk/commit/96a642805334376da1691482c8de710cb30d8e54))
* **internal:** codegen related update ([0f48c3c](https://github.com/hyperspell/node-sdk/commit/0f48c3c73e7a5f5bd2f5a21b58d5e42c369b5a7a))
* **internal:** codegen related update ([7136be0](https://github.com/hyperspell/node-sdk/commit/7136be08b13c920d0255e19aa65135245fbb8ba6))
* **internal:** codegen related update ([b4aec87](https://github.com/hyperspell/node-sdk/commit/b4aec87aec69128a7a2ff13a1f19a4104d0960f8))
* **internal:** codegen related update ([#28](https://github.com/hyperspell/node-sdk/issues/28)) ([44c69e8](https://github.com/hyperspell/node-sdk/commit/44c69e887a6e32339a487e28e14e444e68ac32c5))
* **internal:** codegen related update ([#31](https://github.com/hyperspell/node-sdk/issues/31)) ([2b286c1](https://github.com/hyperspell/node-sdk/commit/2b286c14f6545cfaf65259fabc051c40dbe336e7))
* **internal:** fix devcontainers setup ([#29](https://github.com/hyperspell/node-sdk/issues/29)) ([26194ce](https://github.com/hyperspell/node-sdk/commit/26194ce3891b4f5e6bc89d13a7e8c85137dfe731))
* **internal:** make base APIResource abstract ([65f20d3](https://github.com/hyperspell/node-sdk/commit/65f20d34a4bd8349d7570924d675f56ae8bdbdda))
* **internal:** reduce CI branch coverage ([230a7e0](https://github.com/hyperspell/node-sdk/commit/230a7e040ced22028266e6caf812724fdd2818e3))
* **internal:** remove extra empty newlines ([#34](https://github.com/hyperspell/node-sdk/issues/34)) ([3677c0c](https://github.com/hyperspell/node-sdk/commit/3677c0c5673c2f49e7f37072be45aad49f1ee5d6))
* **internal:** upload builds and expand CI branch coverage ([9c9f933](https://github.com/hyperspell/node-sdk/commit/9c9f933f203a26408ce4b4ef0bedffe5cdce1ad6))
* update SDK settings ([#3](https://github.com/hyperspell/node-sdk/issues/3)) ([99ef2f5](https://github.com/hyperspell/node-sdk/commit/99ef2f5de368ba55fa92f6678e44b94035f8bc9c))


### Documentation

* add examples to tsdocs ([35758b5](https://github.com/hyperspell/node-sdk/commit/35758b5425045930db8766fe1fabc2cc80039766))
* **readme:** fix typo ([b3c1a53](https://github.com/hyperspell/node-sdk/commit/b3c1a539678787c6b7d6d89aa4d32dc2be0b6f87))
* update URLs from stainlessapi.com to stainless.com ([#30](https://github.com/hyperspell/node-sdk/issues/30)) ([f9c0492](https://github.com/hyperspell/node-sdk/commit/f9c04926d82f1f863e6e111feb3b6e4ab33ff0bf))


### Refactors

* **types:** replace Record with mapped types ([9eeba1f](https://github.com/hyperspell/node-sdk/commit/9eeba1fd8c68e19ae8235ea47f1bbf384cb77281))

## 1.0.0 (2025-06-19)

Full Changelog: [v0.17.0...v1.0.0](https://github.com/hyperspell/node-sdk/compare/v0.17.0...v1.0.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#32](https://github.com/hyperspell/node-sdk/issues/32)) ([ecdef89](https://github.com/hyperspell/node-sdk/commit/ecdef891f2210522efe31e5120d26ad572432f3b))
* **api:** api update ([6122fb8](https://github.com/hyperspell/node-sdk/commit/6122fb8a0817e92f2665d103278eb6d946d60013))
* **api:** api update ([cc5505c](https://github.com/hyperspell/node-sdk/commit/cc5505ce2b352a23f91b28ace3e6f6c04229acf3))
* **api:** api update ([a90e7f5](https://github.com/hyperspell/node-sdk/commit/a90e7f56a4a898bd629f500949bff54aa0ff6046))
* **api:** api update ([ffee59f](https://github.com/hyperspell/node-sdk/commit/ffee59fefc3926c86aaa147936c3264900d9ae3e))
* **api:** api update ([b0c556a](https://github.com/hyperspell/node-sdk/commit/b0c556a79a7c11b5f277f8b9f56a22f8aa591ca5))
* **api:** api update ([97abf79](https://github.com/hyperspell/node-sdk/commit/97abf798eb472aa7ad7c471651b149358385d6d1))
* **api:** api update ([ace1ff1](https://github.com/hyperspell/node-sdk/commit/ace1ff15d2f1efffaf828ee8e48e4e06fb09091e))
* **api:** api update ([dcc1551](https://github.com/hyperspell/node-sdk/commit/dcc155132a0d130ff62a64de0847b612e7e477fc))
* **api:** api update ([6f9c746](https://github.com/hyperspell/node-sdk/commit/6f9c74687f4e79cf83ed0d5b705064ab0b5d413e))
* **api:** api update ([d297aa4](https://github.com/hyperspell/node-sdk/commit/d297aa4cbd7b2373713381cbbd8c15f64d240d8c))
* **api:** api update ([8b34c9c](https://github.com/hyperspell/node-sdk/commit/8b34c9c53094a169859994230d3100dadb68fd92))
* **api:** api update ([8e96b1d](https://github.com/hyperspell/node-sdk/commit/8e96b1d77f28d18a252a3a3eccaf5f4345a56159))
* **api:** api update ([0cfb6ba](https://github.com/hyperspell/node-sdk/commit/0cfb6ba9bdac14f4c8c5fd6b6748940aab3c747b))
* **api:** api update ([7fc15c1](https://github.com/hyperspell/node-sdk/commit/7fc15c1e157998bf4713f7008ad190e10cdb6931))
* **api:** api update ([a9f4767](https://github.com/hyperspell/node-sdk/commit/a9f47673364b5e8f8b2fcfee54b2c7a22eca9d2b))
* **api:** api update ([7a2bd69](https://github.com/hyperspell/node-sdk/commit/7a2bd691ceb933053e41ace833524fa7eb03f0fe))
* **api:** api update ([18e40aa](https://github.com/hyperspell/node-sdk/commit/18e40aa3424efad169f6bb6f84b5e8a4c3b63780))
* **api:** api update ([e9a6314](https://github.com/hyperspell/node-sdk/commit/e9a631469f5daf849bce2a0d4b3c18580a6ce208))
* **api:** api update ([f304147](https://github.com/hyperspell/node-sdk/commit/f3041475263292a22094818a67808ce6bc18498f))
* **api:** api update ([d493a36](https://github.com/hyperspell/node-sdk/commit/d493a36acac1df96fc4d4f0d2e7ed355b812531a))
* **api:** api update ([#10](https://github.com/hyperspell/node-sdk/issues/10)) ([1ad272d](https://github.com/hyperspell/node-sdk/commit/1ad272d7bb37cdabb3936b78afdd173373b23f7c))
* **api:** api update ([#11](https://github.com/hyperspell/node-sdk/issues/11)) ([ca3bf92](https://github.com/hyperspell/node-sdk/commit/ca3bf923a154883f28cd3218bd63f5ccd780ad78))
* **api:** api update ([#12](https://github.com/hyperspell/node-sdk/issues/12)) ([34a173e](https://github.com/hyperspell/node-sdk/commit/34a173e58f1183862b936a8d5f76c6ed0f165fae))
* **api:** api update ([#16](https://github.com/hyperspell/node-sdk/issues/16)) ([9e6e833](https://github.com/hyperspell/node-sdk/commit/9e6e8330a02da1d106f9e172ac634afc08130bd0))
* **api:** api update ([#18](https://github.com/hyperspell/node-sdk/issues/18)) ([2cecbfd](https://github.com/hyperspell/node-sdk/commit/2cecbfda356a7588bdbc42f5ef41b0fbab41b553))
* **api:** api update ([#23](https://github.com/hyperspell/node-sdk/issues/23)) ([c9aaf54](https://github.com/hyperspell/node-sdk/commit/c9aaf54d0505676b9cc6a75af87a9994cca2f5b3))
* **api:** api update ([#24](https://github.com/hyperspell/node-sdk/issues/24)) ([5326693](https://github.com/hyperspell/node-sdk/commit/53266933ad271b9f2f00b7c7e3607eb91f65b7f4))
* **api:** api update ([#25](https://github.com/hyperspell/node-sdk/issues/25)) ([fdc83d1](https://github.com/hyperspell/node-sdk/commit/fdc83d13e6e6d4de12378b219a3ed6b790c66466))
* **api:** api update ([#26](https://github.com/hyperspell/node-sdk/issues/26)) ([eef40b4](https://github.com/hyperspell/node-sdk/commit/eef40b4f33a39ad5a7887669414a4efdd3303f80))
* **api:** api update ([#42](https://github.com/hyperspell/node-sdk/issues/42)) ([9e25c59](https://github.com/hyperspell/node-sdk/commit/9e25c59176277df1cd2999ed875968d68137f93d))
* **api:** api update ([#45](https://github.com/hyperspell/node-sdk/issues/45)) ([c3a3155](https://github.com/hyperspell/node-sdk/commit/c3a315587edbcb59c75c382d04139b2b11b6f0a8))
* **api:** api update ([#5](https://github.com/hyperspell/node-sdk/issues/5)) ([49c1d73](https://github.com/hyperspell/node-sdk/commit/49c1d739eafe4518cffb8e60bc082d4be2144c5f))
* **api:** api update ([#50](https://github.com/hyperspell/node-sdk/issues/50)) ([83c66fb](https://github.com/hyperspell/node-sdk/commit/83c66fb558a9aa88ddf82db79e32b4d77de40b44))
* **api:** api update ([#53](https://github.com/hyperspell/node-sdk/issues/53)) ([32b52ca](https://github.com/hyperspell/node-sdk/commit/32b52ca847549a290c5fa607a81798b183fdee0c))
* **api:** api update ([#54](https://github.com/hyperspell/node-sdk/issues/54)) ([90e3bd2](https://github.com/hyperspell/node-sdk/commit/90e3bd208b5710c52acd2ac01ae40f571f07b499))
* **api:** api update ([#55](https://github.com/hyperspell/node-sdk/issues/55)) ([6ea3488](https://github.com/hyperspell/node-sdk/commit/6ea348848f1d22e9c9e4dc9bf9f4304d18b7e253))
* **api:** api update ([#56](https://github.com/hyperspell/node-sdk/issues/56)) ([8206477](https://github.com/hyperspell/node-sdk/commit/8206477f03333625de9885a0856830911e065ff2))
* **api:** api update ([#7](https://github.com/hyperspell/node-sdk/issues/7)) ([0291c15](https://github.com/hyperspell/node-sdk/commit/0291c15da339ddd03f7b96bfad251becacd21a56))
* **api:** api update ([#8](https://github.com/hyperspell/node-sdk/issues/8)) ([a78d165](https://github.com/hyperspell/node-sdk/commit/a78d165d4dfb39eddaf3982980a4978aef3cd931))
* **api:** api update ([#9](https://github.com/hyperspell/node-sdk/issues/9)) ([615224f](https://github.com/hyperspell/node-sdk/commit/615224fea9f9d26c0b4ea6bcb1f4dbebb41310f4))
* **api:** update via SDK Studio ([bef3818](https://github.com/hyperspell/node-sdk/commit/bef38187fbabc7b1d251ac453d4ce39713d5a5d3))
* **api:** update via SDK Studio ([032db7c](https://github.com/hyperspell/node-sdk/commit/032db7c699840bae6e4b4c952091d8d6bbbb3a08))
* **api:** update via SDK Studio ([7b3a297](https://github.com/hyperspell/node-sdk/commit/7b3a297614bffc729105cd75151a1c7df255fd59))
* **api:** update via SDK Studio ([b411129](https://github.com/hyperspell/node-sdk/commit/b41112960489ea077a9656f80f4436fbbae006b6))
* **api:** update via SDK Studio ([d96b74c](https://github.com/hyperspell/node-sdk/commit/d96b74c0b31fc76e5ad3fb2382ad615c505b4b41))
* **api:** update via SDK Studio ([bbb4650](https://github.com/hyperspell/node-sdk/commit/bbb4650d17f6ec312e2b51bca152881c96577775))
* **api:** update via SDK Studio ([1fc55d0](https://github.com/hyperspell/node-sdk/commit/1fc55d011194539566ca8ec2f9cf6ff1e7aba952))
* **api:** update via SDK Studio ([#13](https://github.com/hyperspell/node-sdk/issues/13)) ([924b6b0](https://github.com/hyperspell/node-sdk/commit/924b6b01ae650c00fd8baec3abd3e6927aa46519))
* **api:** update via SDK Studio ([#14](https://github.com/hyperspell/node-sdk/issues/14)) ([1e4ebfe](https://github.com/hyperspell/node-sdk/commit/1e4ebfeb7e4fc24c9d2bf4267b006c91f96239a6))
* **api:** update via SDK Studio ([#20](https://github.com/hyperspell/node-sdk/issues/20)) ([4a2c34a](https://github.com/hyperspell/node-sdk/commit/4a2c34a97b3e2131ac1c0f6f392d54962bc50f62))
* **api:** update via SDK Studio ([#38](https://github.com/hyperspell/node-sdk/issues/38)) ([61373c8](https://github.com/hyperspell/node-sdk/commit/61373c843629c169d69c4dd133d5b3a9899a230f))
* **api:** update via SDK Studio ([#39](https://github.com/hyperspell/node-sdk/issues/39)) ([a0ce99a](https://github.com/hyperspell/node-sdk/commit/a0ce99aae41fa41ad8bde420f00870ce647ff5d1))
* **api:** update via SDK Studio ([#40](https://github.com/hyperspell/node-sdk/issues/40)) ([5614b84](https://github.com/hyperspell/node-sdk/commit/5614b84d9d2f34d59ba1b61dc43dd7ce4a143d3a))
* **api:** update via SDK Studio ([#41](https://github.com/hyperspell/node-sdk/issues/41)) ([6f9da54](https://github.com/hyperspell/node-sdk/commit/6f9da54a9104bbaab340cfb230f4217fdc8ec4ed))
* **api:** update via SDK Studio ([#43](https://github.com/hyperspell/node-sdk/issues/43)) ([588ad3b](https://github.com/hyperspell/node-sdk/commit/588ad3b6267ca1509e01babedaa2ff89c830bbc0))
* **client:** accept RFC6838 JSON content types ([#33](https://github.com/hyperspell/node-sdk/issues/33)) ([ca38adc](https://github.com/hyperspell/node-sdk/commit/ca38adc6b3125f68d682462e42f7c79ac0d65da1))
* **client:** add support for endpoint-specific base URLs ([41c9568](https://github.com/hyperspell/node-sdk/commit/41c95688af490efd90cf8019b62a1b52cfb99b3e))
* **client:** send `X-Stainless-Timeout` header ([#22](https://github.com/hyperspell/node-sdk/issues/22)) ([4ad8147](https://github.com/hyperspell/node-sdk/commit/4ad814769ef6503eb9b5a51c14d1ea3f74c736c5))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#51](https://github.com/hyperspell/node-sdk/issues/51)) ([bd6cc31](https://github.com/hyperspell/node-sdk/commit/bd6cc31121c57380fca8088bd569f7c79b93164c))
* avoid type error in certain environments ([#37](https://github.com/hyperspell/node-sdk/issues/37)) ([42542b9](https://github.com/hyperspell/node-sdk/commit/42542b91e05ae3543112c21eae0c110158b753e5))
* **client:** fix export map for index exports ([#27](https://github.com/hyperspell/node-sdk/issues/27)) ([5543d8e](https://github.com/hyperspell/node-sdk/commit/5543d8ea3804070de726997e8474deb01318eb68))
* **client:** send `X-Stainless-Timeout` in seconds ([#48](https://github.com/hyperspell/node-sdk/issues/48)) ([ed30b4c](https://github.com/hyperspell/node-sdk/commit/ed30b4c0c4c8802c1ecc999b8d628ab16b81ce82))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#47](https://github.com/hyperspell/node-sdk/issues/47)) ([f4a35e1](https://github.com/hyperspell/node-sdk/commit/f4a35e10b5a6fd2ef6a092643a64a0ddbf485c2f))
* **mcp:** remove unused tools.ts ([#52](https://github.com/hyperspell/node-sdk/issues/52)) ([81d6ccd](https://github.com/hyperspell/node-sdk/commit/81d6ccd257f8a29c226a8885fe5120c721ba2a66))
* publish script — handle NPM errors correctly ([b69fab6](https://github.com/hyperspell/node-sdk/commit/b69fab6cd8fedb0ae57a885b2e86715b8b9df3ba))


### Chores

* **ci:** add timeout thresholds for CI jobs ([b0a9540](https://github.com/hyperspell/node-sdk/commit/b0a95401a7cffc8b4a460926d68943e9f355c925))
* **ci:** bump node version for release workflows ([ec832be](https://github.com/hyperspell/node-sdk/commit/ec832be086586fdd36081ef92c8d05711b7aef96))
* **ci:** enable for pull requests ([a326896](https://github.com/hyperspell/node-sdk/commit/a326896ffcebabc961ab6df118623fe57113459b))
* **ci:** only use depot for staging repos ([a39159d](https://github.com/hyperspell/node-sdk/commit/a39159da3134e1b5cbd5e47d39b8ce24c0f0d1be))
* **client:** minor internal fixes ([ad7b9c1](https://github.com/hyperspell/node-sdk/commit/ad7b9c1fe80a8c1e866bcc5fac0172f26b4d8330))
* configure new SDK language ([8c13384](https://github.com/hyperspell/node-sdk/commit/8c13384ed9565c850e8c732bc83da96f3f73671d))
* configure new SDK language ([6b1ea1e](https://github.com/hyperspell/node-sdk/commit/6b1ea1ee164cf9bad4273005a5ef22096c1a290c))
* **docs:** add missing deprecation warnings ([32486cc](https://github.com/hyperspell/node-sdk/commit/32486ccb3b493dc7e68f7681c4c1ba5054a9cd63))
* **docs:** grammar improvements ([66e2a3d](https://github.com/hyperspell/node-sdk/commit/66e2a3d1d316adea94ccf9ebf6658b81b0e0a7f3))
* **docs:** use top-level-await in example snippets ([9dba44a](https://github.com/hyperspell/node-sdk/commit/9dba44a45ccc28f2ac366eb6b50de4c0cb933b06))
* **exports:** cleaner resource index imports ([#35](https://github.com/hyperspell/node-sdk/issues/35)) ([641f5b3](https://github.com/hyperspell/node-sdk/commit/641f5b3a2311b4db0c16d4555e6073a502c94226))
* **exports:** stop using path fallbacks ([#36](https://github.com/hyperspell/node-sdk/issues/36)) ([801d961](https://github.com/hyperspell/node-sdk/commit/801d961baa29194a1ecc3656305297e893fb2bb0))
* go live ([#1](https://github.com/hyperspell/node-sdk/issues/1)) ([88cabb4](https://github.com/hyperspell/node-sdk/commit/88cabb40b7540aabd038ae209f129e05d0917a4e))
* improve publish-npm script --latest tag logic ([55d7d43](https://github.com/hyperspell/node-sdk/commit/55d7d438e1a910e3ef773b95f9e1a4038b130353))
* **internal:** add aliases for Record and Array ([#49](https://github.com/hyperspell/node-sdk/issues/49)) ([680264c](https://github.com/hyperspell/node-sdk/commit/680264c480dda059684bfcff5637f6402b49a278))
* **internal:** codegen related update ([c044268](https://github.com/hyperspell/node-sdk/commit/c044268dcbd4cf5be42fa77a28731b5921847aa4))
* **internal:** codegen related update ([96a6428](https://github.com/hyperspell/node-sdk/commit/96a642805334376da1691482c8de710cb30d8e54))
* **internal:** codegen related update ([0f48c3c](https://github.com/hyperspell/node-sdk/commit/0f48c3c73e7a5f5bd2f5a21b58d5e42c369b5a7a))
* **internal:** codegen related update ([7136be0](https://github.com/hyperspell/node-sdk/commit/7136be08b13c920d0255e19aa65135245fbb8ba6))
* **internal:** codegen related update ([b4aec87](https://github.com/hyperspell/node-sdk/commit/b4aec87aec69128a7a2ff13a1f19a4104d0960f8))
* **internal:** codegen related update ([#28](https://github.com/hyperspell/node-sdk/issues/28)) ([44c69e8](https://github.com/hyperspell/node-sdk/commit/44c69e887a6e32339a487e28e14e444e68ac32c5))
* **internal:** codegen related update ([#31](https://github.com/hyperspell/node-sdk/issues/31)) ([2b286c1](https://github.com/hyperspell/node-sdk/commit/2b286c14f6545cfaf65259fabc051c40dbe336e7))
* **internal:** fix devcontainers setup ([#29](https://github.com/hyperspell/node-sdk/issues/29)) ([26194ce](https://github.com/hyperspell/node-sdk/commit/26194ce3891b4f5e6bc89d13a7e8c85137dfe731))
* **internal:** make base APIResource abstract ([65f20d3](https://github.com/hyperspell/node-sdk/commit/65f20d34a4bd8349d7570924d675f56ae8bdbdda))
* **internal:** reduce CI branch coverage ([230a7e0](https://github.com/hyperspell/node-sdk/commit/230a7e040ced22028266e6caf812724fdd2818e3))
* **internal:** remove extra empty newlines ([#34](https://github.com/hyperspell/node-sdk/issues/34)) ([3677c0c](https://github.com/hyperspell/node-sdk/commit/3677c0c5673c2f49e7f37072be45aad49f1ee5d6))
* **internal:** upload builds and expand CI branch coverage ([9c9f933](https://github.com/hyperspell/node-sdk/commit/9c9f933f203a26408ce4b4ef0bedffe5cdce1ad6))
* update SDK settings ([#3](https://github.com/hyperspell/node-sdk/issues/3)) ([99ef2f5](https://github.com/hyperspell/node-sdk/commit/99ef2f5de368ba55fa92f6678e44b94035f8bc9c))


### Documentation

* add examples to tsdocs ([35758b5](https://github.com/hyperspell/node-sdk/commit/35758b5425045930db8766fe1fabc2cc80039766))
* **readme:** fix typo ([b3c1a53](https://github.com/hyperspell/node-sdk/commit/b3c1a539678787c6b7d6d89aa4d32dc2be0b6f87))
* update URLs from stainlessapi.com to stainless.com ([#30](https://github.com/hyperspell/node-sdk/issues/30)) ([f9c0492](https://github.com/hyperspell/node-sdk/commit/f9c04926d82f1f863e6e111feb3b6e4ab33ff0bf))

## 0.17.0 (2025-05-29)

Full Changelog: [v0.16.0...v0.17.0](https://github.com/hyperspell/node-sdk/compare/v0.16.0...v0.17.0)

### Features

* **api:** api update ([a90e7f5](https://github.com/hyperspell/node-sdk/commit/a90e7f56a4a898bd629f500949bff54aa0ff6046))
* **api:** api update ([ffee59f](https://github.com/hyperspell/node-sdk/commit/ffee59fefc3926c86aaa147936c3264900d9ae3e))


### Chores

* improve publish-npm script --latest tag logic ([55d7d43](https://github.com/hyperspell/node-sdk/commit/55d7d438e1a910e3ef773b95f9e1a4038b130353))

## 0.16.0 (2025-05-27)

Full Changelog: [v0.15.0...v0.16.0](https://github.com/hyperspell/node-sdk/compare/v0.15.0...v0.16.0)

### Features

* **api:** update via SDK Studio ([7b3a297](https://github.com/hyperspell/node-sdk/commit/7b3a297614bffc729105cd75151a1c7df255fd59))

## 0.15.0 (2025-05-26)

Full Changelog: [v0.14.0...v0.15.0](https://github.com/hyperspell/node-sdk/compare/v0.14.0...v0.15.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#32](https://github.com/hyperspell/node-sdk/issues/32)) ([ecdef89](https://github.com/hyperspell/node-sdk/commit/ecdef891f2210522efe31e5120d26ad572432f3b))
* **api:** api update ([b0c556a](https://github.com/hyperspell/node-sdk/commit/b0c556a79a7c11b5f277f8b9f56a22f8aa591ca5))
* **api:** api update ([97abf79](https://github.com/hyperspell/node-sdk/commit/97abf798eb472aa7ad7c471651b149358385d6d1))
* **api:** api update ([ace1ff1](https://github.com/hyperspell/node-sdk/commit/ace1ff15d2f1efffaf828ee8e48e4e06fb09091e))
* **api:** api update ([dcc1551](https://github.com/hyperspell/node-sdk/commit/dcc155132a0d130ff62a64de0847b612e7e477fc))
* **api:** api update ([6f9c746](https://github.com/hyperspell/node-sdk/commit/6f9c74687f4e79cf83ed0d5b705064ab0b5d413e))
* **api:** api update ([d297aa4](https://github.com/hyperspell/node-sdk/commit/d297aa4cbd7b2373713381cbbd8c15f64d240d8c))
* **api:** api update ([8b34c9c](https://github.com/hyperspell/node-sdk/commit/8b34c9c53094a169859994230d3100dadb68fd92))
* **api:** api update ([8e96b1d](https://github.com/hyperspell/node-sdk/commit/8e96b1d77f28d18a252a3a3eccaf5f4345a56159))
* **api:** api update ([0cfb6ba](https://github.com/hyperspell/node-sdk/commit/0cfb6ba9bdac14f4c8c5fd6b6748940aab3c747b))
* **api:** api update ([7fc15c1](https://github.com/hyperspell/node-sdk/commit/7fc15c1e157998bf4713f7008ad190e10cdb6931))
* **api:** api update ([a9f4767](https://github.com/hyperspell/node-sdk/commit/a9f47673364b5e8f8b2fcfee54b2c7a22eca9d2b))
* **api:** api update ([7a2bd69](https://github.com/hyperspell/node-sdk/commit/7a2bd691ceb933053e41ace833524fa7eb03f0fe))
* **api:** api update ([18e40aa](https://github.com/hyperspell/node-sdk/commit/18e40aa3424efad169f6bb6f84b5e8a4c3b63780))
* **api:** api update ([e9a6314](https://github.com/hyperspell/node-sdk/commit/e9a631469f5daf849bce2a0d4b3c18580a6ce208))
* **api:** api update ([f304147](https://github.com/hyperspell/node-sdk/commit/f3041475263292a22094818a67808ce6bc18498f))
* **api:** api update ([d493a36](https://github.com/hyperspell/node-sdk/commit/d493a36acac1df96fc4d4f0d2e7ed355b812531a))
* **api:** api update ([#10](https://github.com/hyperspell/node-sdk/issues/10)) ([1ad272d](https://github.com/hyperspell/node-sdk/commit/1ad272d7bb37cdabb3936b78afdd173373b23f7c))
* **api:** api update ([#11](https://github.com/hyperspell/node-sdk/issues/11)) ([ca3bf92](https://github.com/hyperspell/node-sdk/commit/ca3bf923a154883f28cd3218bd63f5ccd780ad78))
* **api:** api update ([#12](https://github.com/hyperspell/node-sdk/issues/12)) ([34a173e](https://github.com/hyperspell/node-sdk/commit/34a173e58f1183862b936a8d5f76c6ed0f165fae))
* **api:** api update ([#16](https://github.com/hyperspell/node-sdk/issues/16)) ([9e6e833](https://github.com/hyperspell/node-sdk/commit/9e6e8330a02da1d106f9e172ac634afc08130bd0))
* **api:** api update ([#18](https://github.com/hyperspell/node-sdk/issues/18)) ([2cecbfd](https://github.com/hyperspell/node-sdk/commit/2cecbfda356a7588bdbc42f5ef41b0fbab41b553))
* **api:** api update ([#23](https://github.com/hyperspell/node-sdk/issues/23)) ([c9aaf54](https://github.com/hyperspell/node-sdk/commit/c9aaf54d0505676b9cc6a75af87a9994cca2f5b3))
* **api:** api update ([#24](https://github.com/hyperspell/node-sdk/issues/24)) ([5326693](https://github.com/hyperspell/node-sdk/commit/53266933ad271b9f2f00b7c7e3607eb91f65b7f4))
* **api:** api update ([#25](https://github.com/hyperspell/node-sdk/issues/25)) ([fdc83d1](https://github.com/hyperspell/node-sdk/commit/fdc83d13e6e6d4de12378b219a3ed6b790c66466))
* **api:** api update ([#26](https://github.com/hyperspell/node-sdk/issues/26)) ([eef40b4](https://github.com/hyperspell/node-sdk/commit/eef40b4f33a39ad5a7887669414a4efdd3303f80))
* **api:** api update ([#42](https://github.com/hyperspell/node-sdk/issues/42)) ([9e25c59](https://github.com/hyperspell/node-sdk/commit/9e25c59176277df1cd2999ed875968d68137f93d))
* **api:** api update ([#45](https://github.com/hyperspell/node-sdk/issues/45)) ([c3a3155](https://github.com/hyperspell/node-sdk/commit/c3a315587edbcb59c75c382d04139b2b11b6f0a8))
* **api:** api update ([#5](https://github.com/hyperspell/node-sdk/issues/5)) ([49c1d73](https://github.com/hyperspell/node-sdk/commit/49c1d739eafe4518cffb8e60bc082d4be2144c5f))
* **api:** api update ([#50](https://github.com/hyperspell/node-sdk/issues/50)) ([83c66fb](https://github.com/hyperspell/node-sdk/commit/83c66fb558a9aa88ddf82db79e32b4d77de40b44))
* **api:** api update ([#53](https://github.com/hyperspell/node-sdk/issues/53)) ([32b52ca](https://github.com/hyperspell/node-sdk/commit/32b52ca847549a290c5fa607a81798b183fdee0c))
* **api:** api update ([#54](https://github.com/hyperspell/node-sdk/issues/54)) ([90e3bd2](https://github.com/hyperspell/node-sdk/commit/90e3bd208b5710c52acd2ac01ae40f571f07b499))
* **api:** api update ([#55](https://github.com/hyperspell/node-sdk/issues/55)) ([6ea3488](https://github.com/hyperspell/node-sdk/commit/6ea348848f1d22e9c9e4dc9bf9f4304d18b7e253))
* **api:** api update ([#56](https://github.com/hyperspell/node-sdk/issues/56)) ([8206477](https://github.com/hyperspell/node-sdk/commit/8206477f03333625de9885a0856830911e065ff2))
* **api:** api update ([#7](https://github.com/hyperspell/node-sdk/issues/7)) ([0291c15](https://github.com/hyperspell/node-sdk/commit/0291c15da339ddd03f7b96bfad251becacd21a56))
* **api:** api update ([#8](https://github.com/hyperspell/node-sdk/issues/8)) ([a78d165](https://github.com/hyperspell/node-sdk/commit/a78d165d4dfb39eddaf3982980a4978aef3cd931))
* **api:** api update ([#9](https://github.com/hyperspell/node-sdk/issues/9)) ([615224f](https://github.com/hyperspell/node-sdk/commit/615224fea9f9d26c0b4ea6bcb1f4dbebb41310f4))
* **api:** update via SDK Studio ([b411129](https://github.com/hyperspell/node-sdk/commit/b41112960489ea077a9656f80f4436fbbae006b6))
* **api:** update via SDK Studio ([d96b74c](https://github.com/hyperspell/node-sdk/commit/d96b74c0b31fc76e5ad3fb2382ad615c505b4b41))
* **api:** update via SDK Studio ([bbb4650](https://github.com/hyperspell/node-sdk/commit/bbb4650d17f6ec312e2b51bca152881c96577775))
* **api:** update via SDK Studio ([1fc55d0](https://github.com/hyperspell/node-sdk/commit/1fc55d011194539566ca8ec2f9cf6ff1e7aba952))
* **api:** update via SDK Studio ([#13](https://github.com/hyperspell/node-sdk/issues/13)) ([924b6b0](https://github.com/hyperspell/node-sdk/commit/924b6b01ae650c00fd8baec3abd3e6927aa46519))
* **api:** update via SDK Studio ([#14](https://github.com/hyperspell/node-sdk/issues/14)) ([1e4ebfe](https://github.com/hyperspell/node-sdk/commit/1e4ebfeb7e4fc24c9d2bf4267b006c91f96239a6))
* **api:** update via SDK Studio ([#20](https://github.com/hyperspell/node-sdk/issues/20)) ([4a2c34a](https://github.com/hyperspell/node-sdk/commit/4a2c34a97b3e2131ac1c0f6f392d54962bc50f62))
* **api:** update via SDK Studio ([#38](https://github.com/hyperspell/node-sdk/issues/38)) ([61373c8](https://github.com/hyperspell/node-sdk/commit/61373c843629c169d69c4dd133d5b3a9899a230f))
* **api:** update via SDK Studio ([#39](https://github.com/hyperspell/node-sdk/issues/39)) ([a0ce99a](https://github.com/hyperspell/node-sdk/commit/a0ce99aae41fa41ad8bde420f00870ce647ff5d1))
* **api:** update via SDK Studio ([#40](https://github.com/hyperspell/node-sdk/issues/40)) ([5614b84](https://github.com/hyperspell/node-sdk/commit/5614b84d9d2f34d59ba1b61dc43dd7ce4a143d3a))
* **api:** update via SDK Studio ([#41](https://github.com/hyperspell/node-sdk/issues/41)) ([6f9da54](https://github.com/hyperspell/node-sdk/commit/6f9da54a9104bbaab340cfb230f4217fdc8ec4ed))
* **api:** update via SDK Studio ([#43](https://github.com/hyperspell/node-sdk/issues/43)) ([588ad3b](https://github.com/hyperspell/node-sdk/commit/588ad3b6267ca1509e01babedaa2ff89c830bbc0))
* **client:** accept RFC6838 JSON content types ([#33](https://github.com/hyperspell/node-sdk/issues/33)) ([ca38adc](https://github.com/hyperspell/node-sdk/commit/ca38adc6b3125f68d682462e42f7c79ac0d65da1))
* **client:** send `X-Stainless-Timeout` header ([#22](https://github.com/hyperspell/node-sdk/issues/22)) ([4ad8147](https://github.com/hyperspell/node-sdk/commit/4ad814769ef6503eb9b5a51c14d1ea3f74c736c5))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#51](https://github.com/hyperspell/node-sdk/issues/51)) ([bd6cc31](https://github.com/hyperspell/node-sdk/commit/bd6cc31121c57380fca8088bd569f7c79b93164c))
* avoid type error in certain environments ([#37](https://github.com/hyperspell/node-sdk/issues/37)) ([42542b9](https://github.com/hyperspell/node-sdk/commit/42542b91e05ae3543112c21eae0c110158b753e5))
* **client:** fix export map for index exports ([#27](https://github.com/hyperspell/node-sdk/issues/27)) ([5543d8e](https://github.com/hyperspell/node-sdk/commit/5543d8ea3804070de726997e8474deb01318eb68))
* **client:** send `X-Stainless-Timeout` in seconds ([#48](https://github.com/hyperspell/node-sdk/issues/48)) ([ed30b4c](https://github.com/hyperspell/node-sdk/commit/ed30b4c0c4c8802c1ecc999b8d628ab16b81ce82))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#47](https://github.com/hyperspell/node-sdk/issues/47)) ([f4a35e1](https://github.com/hyperspell/node-sdk/commit/f4a35e10b5a6fd2ef6a092643a64a0ddbf485c2f))
* **mcp:** remove unused tools.ts ([#52](https://github.com/hyperspell/node-sdk/issues/52)) ([81d6ccd](https://github.com/hyperspell/node-sdk/commit/81d6ccd257f8a29c226a8885fe5120c721ba2a66))


### Chores

* **ci:** add timeout thresholds for CI jobs ([b0a9540](https://github.com/hyperspell/node-sdk/commit/b0a95401a7cffc8b4a460926d68943e9f355c925))
* **ci:** bump node version for release workflows ([ec832be](https://github.com/hyperspell/node-sdk/commit/ec832be086586fdd36081ef92c8d05711b7aef96))
* **ci:** only use depot for staging repos ([a39159d](https://github.com/hyperspell/node-sdk/commit/a39159da3134e1b5cbd5e47d39b8ce24c0f0d1be))
* **client:** minor internal fixes ([ad7b9c1](https://github.com/hyperspell/node-sdk/commit/ad7b9c1fe80a8c1e866bcc5fac0172f26b4d8330))
* configure new SDK language ([6b1ea1e](https://github.com/hyperspell/node-sdk/commit/6b1ea1ee164cf9bad4273005a5ef22096c1a290c))
* **docs:** add missing deprecation warnings ([32486cc](https://github.com/hyperspell/node-sdk/commit/32486ccb3b493dc7e68f7681c4c1ba5054a9cd63))
* **docs:** grammar improvements ([66e2a3d](https://github.com/hyperspell/node-sdk/commit/66e2a3d1d316adea94ccf9ebf6658b81b0e0a7f3))
* **exports:** cleaner resource index imports ([#35](https://github.com/hyperspell/node-sdk/issues/35)) ([641f5b3](https://github.com/hyperspell/node-sdk/commit/641f5b3a2311b4db0c16d4555e6073a502c94226))
* **exports:** stop using path fallbacks ([#36](https://github.com/hyperspell/node-sdk/issues/36)) ([801d961](https://github.com/hyperspell/node-sdk/commit/801d961baa29194a1ecc3656305297e893fb2bb0))
* go live ([#1](https://github.com/hyperspell/node-sdk/issues/1)) ([88cabb4](https://github.com/hyperspell/node-sdk/commit/88cabb40b7540aabd038ae209f129e05d0917a4e))
* **internal:** add aliases for Record and Array ([#49](https://github.com/hyperspell/node-sdk/issues/49)) ([680264c](https://github.com/hyperspell/node-sdk/commit/680264c480dda059684bfcff5637f6402b49a278))
* **internal:** codegen related update ([c044268](https://github.com/hyperspell/node-sdk/commit/c044268dcbd4cf5be42fa77a28731b5921847aa4))
* **internal:** codegen related update ([96a6428](https://github.com/hyperspell/node-sdk/commit/96a642805334376da1691482c8de710cb30d8e54))
* **internal:** codegen related update ([0f48c3c](https://github.com/hyperspell/node-sdk/commit/0f48c3c73e7a5f5bd2f5a21b58d5e42c369b5a7a))
* **internal:** codegen related update ([7136be0](https://github.com/hyperspell/node-sdk/commit/7136be08b13c920d0255e19aa65135245fbb8ba6))
* **internal:** codegen related update ([b4aec87](https://github.com/hyperspell/node-sdk/commit/b4aec87aec69128a7a2ff13a1f19a4104d0960f8))
* **internal:** codegen related update ([#28](https://github.com/hyperspell/node-sdk/issues/28)) ([44c69e8](https://github.com/hyperspell/node-sdk/commit/44c69e887a6e32339a487e28e14e444e68ac32c5))
* **internal:** codegen related update ([#31](https://github.com/hyperspell/node-sdk/issues/31)) ([2b286c1](https://github.com/hyperspell/node-sdk/commit/2b286c14f6545cfaf65259fabc051c40dbe336e7))
* **internal:** fix devcontainers setup ([#29](https://github.com/hyperspell/node-sdk/issues/29)) ([26194ce](https://github.com/hyperspell/node-sdk/commit/26194ce3891b4f5e6bc89d13a7e8c85137dfe731))
* **internal:** reduce CI branch coverage ([230a7e0](https://github.com/hyperspell/node-sdk/commit/230a7e040ced22028266e6caf812724fdd2818e3))
* **internal:** remove extra empty newlines ([#34](https://github.com/hyperspell/node-sdk/issues/34)) ([3677c0c](https://github.com/hyperspell/node-sdk/commit/3677c0c5673c2f49e7f37072be45aad49f1ee5d6))
* **internal:** upload builds and expand CI branch coverage ([9c9f933](https://github.com/hyperspell/node-sdk/commit/9c9f933f203a26408ce4b4ef0bedffe5cdce1ad6))
* update SDK settings ([#3](https://github.com/hyperspell/node-sdk/issues/3)) ([99ef2f5](https://github.com/hyperspell/node-sdk/commit/99ef2f5de368ba55fa92f6678e44b94035f8bc9c))


### Documentation

* add examples to tsdocs ([35758b5](https://github.com/hyperspell/node-sdk/commit/35758b5425045930db8766fe1fabc2cc80039766))
* **readme:** fix typo ([b3c1a53](https://github.com/hyperspell/node-sdk/commit/b3c1a539678787c6b7d6d89aa4d32dc2be0b6f87))
* update URLs from stainlessapi.com to stainless.com ([#30](https://github.com/hyperspell/node-sdk/issues/30)) ([f9c0492](https://github.com/hyperspell/node-sdk/commit/f9c04926d82f1f863e6e111feb3b6e4ab33ff0bf))

## 0.14.0 (2025-05-01)

Full Changelog: [v0.13.0...v0.14.0](https://github.com/hyperspell/node-sdk/compare/v0.13.0...v0.14.0)

### Features

* **api:** api update ([6f9c746](https://github.com/hyperspell/node-sdk/commit/6f9c74687f4e79cf83ed0d5b705064ab0b5d413e))
* **api:** api update ([d297aa4](https://github.com/hyperspell/node-sdk/commit/d297aa4cbd7b2373713381cbbd8c15f64d240d8c))


### Chores

* **ci:** add timeout thresholds for CI jobs ([b0a9540](https://github.com/hyperspell/node-sdk/commit/b0a95401a7cffc8b4a460926d68943e9f355c925))
* **ci:** only use depot for staging repos ([a39159d](https://github.com/hyperspell/node-sdk/commit/a39159da3134e1b5cbd5e47d39b8ce24c0f0d1be))
* **docs:** add missing deprecation warnings ([32486cc](https://github.com/hyperspell/node-sdk/commit/32486ccb3b493dc7e68f7681c4c1ba5054a9cd63))
* **internal:** codegen related update ([c044268](https://github.com/hyperspell/node-sdk/commit/c044268dcbd4cf5be42fa77a28731b5921847aa4))


### Documentation

* **readme:** fix typo ([b3c1a53](https://github.com/hyperspell/node-sdk/commit/b3c1a539678787c6b7d6d89aa4d32dc2be0b6f87))

## 0.13.0 (2025-04-21)

Full Changelog: [v0.12.0...v0.13.0](https://github.com/hyperspell/node-sdk/compare/v0.12.0...v0.13.0)

### Features

* **api:** update via SDK Studio ([d96b74c](https://github.com/hyperspell/node-sdk/commit/d96b74c0b31fc76e5ad3fb2382ad615c505b4b41))
* **api:** update via SDK Studio ([bbb4650](https://github.com/hyperspell/node-sdk/commit/bbb4650d17f6ec312e2b51bca152881c96577775))
* **api:** update via SDK Studio ([1fc55d0](https://github.com/hyperspell/node-sdk/commit/1fc55d011194539566ca8ec2f9cf6ff1e7aba952))

## 0.12.0 (2025-04-19)

Full Changelog: [v0.9.0...v0.12.0](https://github.com/hyperspell/node-sdk/compare/v0.9.0...v0.12.0)

### Features

* **api:** api update ([8b34c9c](https://github.com/hyperspell/node-sdk/commit/8b34c9c53094a169859994230d3100dadb68fd92))
* **api:** api update ([8e96b1d](https://github.com/hyperspell/node-sdk/commit/8e96b1d77f28d18a252a3a3eccaf5f4345a56159))
* **api:** api update ([0cfb6ba](https://github.com/hyperspell/node-sdk/commit/0cfb6ba9bdac14f4c8c5fd6b6748940aab3c747b))


### Chores

* **client:** minor internal fixes ([ad7b9c1](https://github.com/hyperspell/node-sdk/commit/ad7b9c1fe80a8c1e866bcc5fac0172f26b4d8330))

## 0.9.0 (2025-04-10)

Full Changelog: [v0.8.2...v0.9.0](https://github.com/hyperspell/node-sdk/compare/v0.8.2...v0.9.0)

### Features

* **api:** api update ([7fc15c1](https://github.com/hyperspell/node-sdk/commit/7fc15c1e157998bf4713f7008ad190e10cdb6931))
* **api:** api update ([#45](https://github.com/hyperspell/node-sdk/issues/45)) ([c3a3155](https://github.com/hyperspell/node-sdk/commit/c3a315587edbcb59c75c382d04139b2b11b6f0a8))
* **api:** api update ([#50](https://github.com/hyperspell/node-sdk/issues/50)) ([83c66fb](https://github.com/hyperspell/node-sdk/commit/83c66fb558a9aa88ddf82db79e32b4d77de40b44))
* **api:** api update ([#53](https://github.com/hyperspell/node-sdk/issues/53)) ([32b52ca](https://github.com/hyperspell/node-sdk/commit/32b52ca847549a290c5fa607a81798b183fdee0c))
* **api:** api update ([#54](https://github.com/hyperspell/node-sdk/issues/54)) ([90e3bd2](https://github.com/hyperspell/node-sdk/commit/90e3bd208b5710c52acd2ac01ae40f571f07b499))
* **api:** api update ([#55](https://github.com/hyperspell/node-sdk/issues/55)) ([6ea3488](https://github.com/hyperspell/node-sdk/commit/6ea348848f1d22e9c9e4dc9bf9f4304d18b7e253))
* **api:** api update ([#56](https://github.com/hyperspell/node-sdk/issues/56)) ([8206477](https://github.com/hyperspell/node-sdk/commit/8206477f03333625de9885a0856830911e065ff2))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#51](https://github.com/hyperspell/node-sdk/issues/51)) ([bd6cc31](https://github.com/hyperspell/node-sdk/commit/bd6cc31121c57380fca8088bd569f7c79b93164c))
* **client:** send `X-Stainless-Timeout` in seconds ([#48](https://github.com/hyperspell/node-sdk/issues/48)) ([ed30b4c](https://github.com/hyperspell/node-sdk/commit/ed30b4c0c4c8802c1ecc999b8d628ab16b81ce82))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#47](https://github.com/hyperspell/node-sdk/issues/47)) ([f4a35e1](https://github.com/hyperspell/node-sdk/commit/f4a35e10b5a6fd2ef6a092643a64a0ddbf485c2f))
* **mcp:** remove unused tools.ts ([#52](https://github.com/hyperspell/node-sdk/issues/52)) ([81d6ccd](https://github.com/hyperspell/node-sdk/commit/81d6ccd257f8a29c226a8885fe5120c721ba2a66))


### Chores

* **internal:** add aliases for Record and Array ([#49](https://github.com/hyperspell/node-sdk/issues/49)) ([680264c](https://github.com/hyperspell/node-sdk/commit/680264c480dda059684bfcff5637f6402b49a278))
* **internal:** reduce CI branch coverage ([230a7e0](https://github.com/hyperspell/node-sdk/commit/230a7e040ced22028266e6caf812724fdd2818e3))
* **internal:** upload builds and expand CI branch coverage ([9c9f933](https://github.com/hyperspell/node-sdk/commit/9c9f933f203a26408ce4b4ef0bedffe5cdce1ad6))

## 0.8.2 (2025-03-26)

Full Changelog: [v0.5.3...v0.8.2](https://github.com/hyperspell/node-sdk/compare/v0.5.3...v0.8.2)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#32](https://github.com/hyperspell/node-sdk/issues/32)) ([ecdef89](https://github.com/hyperspell/node-sdk/commit/ecdef891f2210522efe31e5120d26ad572432f3b))
* **api:** api update ([a9f4767](https://github.com/hyperspell/node-sdk/commit/a9f47673364b5e8f8b2fcfee54b2c7a22eca9d2b))
* **api:** api update ([#23](https://github.com/hyperspell/node-sdk/issues/23)) ([c9aaf54](https://github.com/hyperspell/node-sdk/commit/c9aaf54d0505676b9cc6a75af87a9994cca2f5b3))
* **api:** api update ([#24](https://github.com/hyperspell/node-sdk/issues/24)) ([5326693](https://github.com/hyperspell/node-sdk/commit/53266933ad271b9f2f00b7c7e3607eb91f65b7f4))
* **api:** api update ([#25](https://github.com/hyperspell/node-sdk/issues/25)) ([fdc83d1](https://github.com/hyperspell/node-sdk/commit/fdc83d13e6e6d4de12378b219a3ed6b790c66466))
* **api:** api update ([#26](https://github.com/hyperspell/node-sdk/issues/26)) ([eef40b4](https://github.com/hyperspell/node-sdk/commit/eef40b4f33a39ad5a7887669414a4efdd3303f80))
* **api:** api update ([#42](https://github.com/hyperspell/node-sdk/issues/42)) ([9e25c59](https://github.com/hyperspell/node-sdk/commit/9e25c59176277df1cd2999ed875968d68137f93d))
* **api:** update via SDK Studio ([#20](https://github.com/hyperspell/node-sdk/issues/20)) ([4a2c34a](https://github.com/hyperspell/node-sdk/commit/4a2c34a97b3e2131ac1c0f6f392d54962bc50f62))
* **api:** update via SDK Studio ([#38](https://github.com/hyperspell/node-sdk/issues/38)) ([61373c8](https://github.com/hyperspell/node-sdk/commit/61373c843629c169d69c4dd133d5b3a9899a230f))
* **api:** update via SDK Studio ([#39](https://github.com/hyperspell/node-sdk/issues/39)) ([a0ce99a](https://github.com/hyperspell/node-sdk/commit/a0ce99aae41fa41ad8bde420f00870ce647ff5d1))
* **api:** update via SDK Studio ([#40](https://github.com/hyperspell/node-sdk/issues/40)) ([5614b84](https://github.com/hyperspell/node-sdk/commit/5614b84d9d2f34d59ba1b61dc43dd7ce4a143d3a))
* **api:** update via SDK Studio ([#41](https://github.com/hyperspell/node-sdk/issues/41)) ([6f9da54](https://github.com/hyperspell/node-sdk/commit/6f9da54a9104bbaab340cfb230f4217fdc8ec4ed))
* **api:** update via SDK Studio ([#43](https://github.com/hyperspell/node-sdk/issues/43)) ([588ad3b](https://github.com/hyperspell/node-sdk/commit/588ad3b6267ca1509e01babedaa2ff89c830bbc0))
* **client:** accept RFC6838 JSON content types ([#33](https://github.com/hyperspell/node-sdk/issues/33)) ([ca38adc](https://github.com/hyperspell/node-sdk/commit/ca38adc6b3125f68d682462e42f7c79ac0d65da1))
* **client:** send `X-Stainless-Timeout` header ([#22](https://github.com/hyperspell/node-sdk/issues/22)) ([4ad8147](https://github.com/hyperspell/node-sdk/commit/4ad814769ef6503eb9b5a51c14d1ea3f74c736c5))


### Bug Fixes

* avoid type error in certain environments ([#37](https://github.com/hyperspell/node-sdk/issues/37)) ([42542b9](https://github.com/hyperspell/node-sdk/commit/42542b91e05ae3543112c21eae0c110158b753e5))
* **client:** fix export map for index exports ([#27](https://github.com/hyperspell/node-sdk/issues/27)) ([5543d8e](https://github.com/hyperspell/node-sdk/commit/5543d8ea3804070de726997e8474deb01318eb68))


### Chores

* **exports:** cleaner resource index imports ([#35](https://github.com/hyperspell/node-sdk/issues/35)) ([641f5b3](https://github.com/hyperspell/node-sdk/commit/641f5b3a2311b4db0c16d4555e6073a502c94226))
* **exports:** stop using path fallbacks ([#36](https://github.com/hyperspell/node-sdk/issues/36)) ([801d961](https://github.com/hyperspell/node-sdk/commit/801d961baa29194a1ecc3656305297e893fb2bb0))
* **internal:** codegen related update ([#28](https://github.com/hyperspell/node-sdk/issues/28)) ([44c69e8](https://github.com/hyperspell/node-sdk/commit/44c69e887a6e32339a487e28e14e444e68ac32c5))
* **internal:** codegen related update ([#31](https://github.com/hyperspell/node-sdk/issues/31)) ([2b286c1](https://github.com/hyperspell/node-sdk/commit/2b286c14f6545cfaf65259fabc051c40dbe336e7))
* **internal:** fix devcontainers setup ([#29](https://github.com/hyperspell/node-sdk/issues/29)) ([26194ce](https://github.com/hyperspell/node-sdk/commit/26194ce3891b4f5e6bc89d13a7e8c85137dfe731))
* **internal:** remove extra empty newlines ([#34](https://github.com/hyperspell/node-sdk/issues/34)) ([3677c0c](https://github.com/hyperspell/node-sdk/commit/3677c0c5673c2f49e7f37072be45aad49f1ee5d6))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#30](https://github.com/hyperspell/node-sdk/issues/30)) ([f9c0492](https://github.com/hyperspell/node-sdk/commit/f9c04926d82f1f863e6e111feb3b6e4ab33ff0bf))

## 0.5.3 (2025-02-04)

Full Changelog: [v0.1.0-alpha.2...v0.5.3](https://github.com/hyperspell/node-sdk/compare/v0.1.0-alpha.2...v0.5.3)

### Features

* **api:** api update ([#16](https://github.com/hyperspell/node-sdk/issues/16)) ([9e6e833](https://github.com/hyperspell/node-sdk/commit/9e6e8330a02da1d106f9e172ac634afc08130bd0))
* **api:** api update ([#18](https://github.com/hyperspell/node-sdk/issues/18)) ([2cecbfd](https://github.com/hyperspell/node-sdk/commit/2cecbfda356a7588bdbc42f5ef41b0fbab41b553))

## 0.1.0-alpha.2 (2025-02-04)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/hyperspell/node-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** api update ([#10](https://github.com/hyperspell/node-sdk/issues/10)) ([1ad272d](https://github.com/hyperspell/node-sdk/commit/1ad272d7bb37cdabb3936b78afdd173373b23f7c))
* **api:** api update ([#11](https://github.com/hyperspell/node-sdk/issues/11)) ([ca3bf92](https://github.com/hyperspell/node-sdk/commit/ca3bf923a154883f28cd3218bd63f5ccd780ad78))
* **api:** api update ([#12](https://github.com/hyperspell/node-sdk/issues/12)) ([34a173e](https://github.com/hyperspell/node-sdk/commit/34a173e58f1183862b936a8d5f76c6ed0f165fae))
* **api:** api update ([#5](https://github.com/hyperspell/node-sdk/issues/5)) ([49c1d73](https://github.com/hyperspell/node-sdk/commit/49c1d739eafe4518cffb8e60bc082d4be2144c5f))
* **api:** api update ([#7](https://github.com/hyperspell/node-sdk/issues/7)) ([0291c15](https://github.com/hyperspell/node-sdk/commit/0291c15da339ddd03f7b96bfad251becacd21a56))
* **api:** api update ([#8](https://github.com/hyperspell/node-sdk/issues/8)) ([a78d165](https://github.com/hyperspell/node-sdk/commit/a78d165d4dfb39eddaf3982980a4978aef3cd931))
* **api:** api update ([#9](https://github.com/hyperspell/node-sdk/issues/9)) ([615224f](https://github.com/hyperspell/node-sdk/commit/615224fea9f9d26c0b4ea6bcb1f4dbebb41310f4))
* **api:** update via SDK Studio ([#13](https://github.com/hyperspell/node-sdk/issues/13)) ([924b6b0](https://github.com/hyperspell/node-sdk/commit/924b6b01ae650c00fd8baec3abd3e6927aa46519))
* **api:** update via SDK Studio ([#14](https://github.com/hyperspell/node-sdk/issues/14)) ([1e4ebfe](https://github.com/hyperspell/node-sdk/commit/1e4ebfeb7e4fc24c9d2bf4267b006c91f96239a6))

## 0.1.0-alpha.1 (2025-01-22)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/hyperspell/node-sdk/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** api update ([7a2bd69](https://github.com/hyperspell/node-sdk/commit/7a2bd691ceb933053e41ace833524fa7eb03f0fe))
* **api:** api update ([18e40aa](https://github.com/hyperspell/node-sdk/commit/18e40aa3424efad169f6bb6f84b5e8a4c3b63780))
* **api:** api update ([e9a6314](https://github.com/hyperspell/node-sdk/commit/e9a631469f5daf849bce2a0d4b3c18580a6ce208))
* **api:** api update ([f304147](https://github.com/hyperspell/node-sdk/commit/f3041475263292a22094818a67808ce6bc18498f))
* **api:** api update ([d493a36](https://github.com/hyperspell/node-sdk/commit/d493a36acac1df96fc4d4f0d2e7ed355b812531a))


### Chores

* configure new SDK language ([6b1ea1e](https://github.com/hyperspell/node-sdk/commit/6b1ea1ee164cf9bad4273005a5ef22096c1a290c))
* go live ([#1](https://github.com/hyperspell/node-sdk/issues/1)) ([88cabb4](https://github.com/hyperspell/node-sdk/commit/88cabb40b7540aabd038ae209f129e05d0917a4e))
* **internal:** codegen related update ([96a6428](https://github.com/hyperspell/node-sdk/commit/96a642805334376da1691482c8de710cb30d8e54))
* **internal:** codegen related update ([0f48c3c](https://github.com/hyperspell/node-sdk/commit/0f48c3c73e7a5f5bd2f5a21b58d5e42c369b5a7a))
* **internal:** codegen related update ([7136be0](https://github.com/hyperspell/node-sdk/commit/7136be08b13c920d0255e19aa65135245fbb8ba6))
* **internal:** codegen related update ([b4aec87](https://github.com/hyperspell/node-sdk/commit/b4aec87aec69128a7a2ff13a1f19a4104d0960f8))
* update SDK settings ([#3](https://github.com/hyperspell/node-sdk/issues/3)) ([99ef2f5](https://github.com/hyperspell/node-sdk/commit/99ef2f5de368ba55fa92f6678e44b94035f8bc9c))
