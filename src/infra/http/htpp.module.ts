import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

import { SendNotification } from 'src/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from 'src/use-cases/cancel-notification';
import { CountRecipientNotifications } from 'src/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from 'src/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/use-cases/errors/read-notifications';
import { UnreadNotification } from 'src/use-cases/errors/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}