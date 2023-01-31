import { Content } from "src/entities/content";
import { Notification,  NotificationProps } from "src/entities/notification";

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação!'),
        recipientId: 'recipient-2',
        ...override,
    });
}