import { makeNotification } from '@test/repositories/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './notification-not-found';
import { ReadNotification } from './read-notifications';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification()

    await notificationsRepository.create(notification);

    await readNotification.execute({
        notificationId: notification.id
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date),);
  });

  it ('should not be able to read a non existing notification', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound)
  })
});