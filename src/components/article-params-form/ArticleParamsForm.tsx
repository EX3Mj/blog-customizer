import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { SyntheticEvent, useState } from 'react';
import clsx from 'clsx';
import { Text } from '../text';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import {
	ArticleStateType,
	defaultArticleState,
	fontFamilyOptions,
	OptionType,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpen, setStateForm] = useState(false);
	const [selectedArticleState, setSelectedArticleState] =
		useState<ArticleStateType>(defaultArticleState);
	const toggleForm = () => {
		setStateForm(!isOpen);
	};
	const handleChange = (key: keyof ArticleStateType, value: OptionType) => {
		setSelectedArticleState({ ...selectedArticleState, [key]: value });
	};

	const handleReset = (e: SyntheticEvent) => {
		e.preventDefault();
		setSelectedArticleState(defaultArticleState);
	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<>
			<ArrowButton onClick={toggleForm} isOpen={isOpen} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form
					className={styles.form}
					onReset={handleReset}
					onSubmit={handleSubmit}>
					<Text as={'h2'} uppercase={true} size={31} weight={800}>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						title={'шрифт'}
						selected={selectedArticleState.fontFamilyOption}
						onChange={(option) => handleChange('fontFamilyOption', option)}
					/>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={selectedArticleState.fontSizeOption}
						onChange={(option) => handleChange('fontSizeOption', option)}
						title='размер шрифта'
					/>
					<Select
						options={fontColors}
						title={'цвет шрифта'}
						selected={selectedArticleState.fontColor}
						onChange={(option) => handleChange('fontColor', option)}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						title={'цвет шрифта'}
						selected={selectedArticleState.backgroundColor}
						onChange={(option) => handleChange('backgroundColor', option)}
					/>
					<Select
						options={contentWidthArr}
						title={'ширина контента'}
						selected={selectedArticleState.contentWidth}
						onChange={(option) => handleChange('contentWidth', option)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
