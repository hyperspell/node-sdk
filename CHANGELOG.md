# Changelog

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
