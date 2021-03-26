import {
  loadContext,
  generate,
  updateContextWithCliFlags,
  YamlCliFlags,
} from '@graphql-codegen/cli';

import { join } from 'path';

module.exports.default = async function (options, executorContext) {
  let codegenContext = await loadContext(
    join(executorContext.root, options.config)
  );

  if (options.watch) {
    updateContextWithCliFlags(codegenContext, {
      watch: true,
    } as YamlCliFlags);
  }
  await generate(codegenContext);

  return { success: true };
};
