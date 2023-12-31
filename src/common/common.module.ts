import { Module } from '@nestjs/common';
import { CryptoUtil } from 'src/common/utils/crypto.utils';

/**
 * 公共模块，向 nest 容器提供单例的公共模块，其他模块使用公共模块导出的 provider 时，只需导入 CommonModule
 */
@Module({
  providers: [CryptoUtil],
  exports: [CryptoUtil],
})
export class CommonModule {}
