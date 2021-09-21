import SettingModel from './setting';
import { attr } from '@ember-data/model';

export default class BlogSettingModel extends SettingModel {
  @attr('string') name;
  @attr('string') value;
}
